import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { WarehouseService } from 'modules/inventory/warehouse/services';
import { WAREHOUSES_LIST_KEY } from 'modules/inventory/warehouse/constants';
import { warehouseLocationsSchema } from 'modules/inventory/warehouse/schemas/warehouse.schema';
import { IWarehouse, WarehouseLocation } from 'modules/inventory/warehouse/interfaces/IWarehouse';

const initValues: Partial<IWarehouse> = {
  _id: '',
  locations: [],
};

const useStoreLocationsCreateForm = (onClose: () => void, defaultValues: Partial<IWarehouse> = initValues) => {
  const { t } = useTranslation('warehouse');
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
    (basic: Partial<IWarehouse>) => WarehouseService.updateLocations(basic),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([WAREHOUSES_LIST_KEY]);
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
    data,
    reset,
    values: formState.errors,
    // @ts-ignore
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
export default useStoreLocationsCreateForm;
