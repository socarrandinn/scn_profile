import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';
import { DISTRIBUTION_CENTERS_ONE_KEY } from 'modules/inventory/distribution-centers/constants';
import { warehouseLocationsSchema } from 'modules/inventory/distribution-centers/schemas/distribution-centers.schema';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces/IDistributionCenters';
import { WarehouseLocation } from 'modules/inventory/warehouse/interfaces/IWarehouse';

const initValues: Partial<IDistributionCenters> = {
  _id: '',
  locations: [],
};

const useDistributionCenterLocationsCreateForm = (onClose: () => void, defaultValues: Partial<IDistributionCenters> = initValues) => {
  const { t } = useTranslation('distributionCenters');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(warehouseLocationsSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (basic: Partial<IDistributionCenters>) => DistributionCentersService.updateLocations(basic),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([DISTRIBUTION_CENTERS_ONE_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successLocationsUpdate'));
        onClose?.();
        reset();
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    formState,
    data,
    reset,
    values: formState.errors,
    onSubmit: handleSubmit((values) => {
      const transformedLocations: WarehouseLocation[] = [];
      const country = values.locations && values.locations[0]?.country;
      const states = values.locations?.flatMap((location) => location.state);

      if (country && states) {
        // @ts-ignore
        transformedLocations.push({ country, states });
      }
      const newValues = { _id: values._id, locations: transformedLocations };
      mutate(newValues);
    }),
  };
};
// @ts-ignore
export default useDistributionCenterLocationsCreateForm;
