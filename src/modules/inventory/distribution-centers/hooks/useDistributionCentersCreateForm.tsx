import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { distributionCentersSchema } from 'modules/inventory/distribution-centers/schemas/distribution-centers.schema';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';
import { DISTRIBUTION_CENTERS_LIST_KEY } from 'modules/inventory/distribution-centers/constants';
import { useEffect, useCallback } from 'react';
import { addressWithLocationInitValue, emailInitValue, phoneInitValue } from 'modules/common/constants';
import { WarehouseLocation } from 'modules/inventory/warehouse/interfaces';

export const initValues: IDistributionCenters = {
  address: addressWithLocationInitValue,
  contacts: {
    phones: [phoneInitValue],
    emails: [emailInitValue],
  },
  logistic: null,
  locations: undefined,
  visible: true,
  name: '',
  description: '',
};

const useDistributionCentersCreateForm = (onClose: () => void, defaultValues: IDistributionCenters = initValues) => {
  const { t } = useTranslation('distributionCenters');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset: resetForm, watch, setValue } = useForm({
    resolver: yupResolver(distributionCentersSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) resetForm(defaultValues);
  }, [defaultValues, resetForm]);

  const { mutate, reset: resetMutation, error, isLoading, isSuccess, data } = useMutation(
    (distributionCenters: IDistributionCenters) => DistributionCentersService.saveOrUpdate(distributionCenters),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([DISTRIBUTION_CENTERS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        onClose?.();
        resetForm();
      },
    },
  );

  const reset = useCallback(
    () => {
      resetForm()
      resetMutation()
    },
    [resetForm, resetMutation],
  )

  return {
    control,
    error,
    watch,
    setValue,
    isLoading,
    isSuccess,
    data,
    reset,
    onSubmit: handleSubmit((values) => {
      const transformedLocations: WarehouseLocation[] = [];

      const country = values.locations && values.locations[0]?.country;
      const states = values.locations?.flatMap((location) => location.state);

      if (country && states) {
        // @ts-ignore
        transformedLocations.push({ country, states });
      }

      values.locations = transformedLocations;

      mutate(values);
    }),
  };
};
export default useDistributionCentersCreateForm;
