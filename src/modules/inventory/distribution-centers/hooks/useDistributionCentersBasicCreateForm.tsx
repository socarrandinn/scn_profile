import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';
import { DISTRIBUTION_CENTERS_ONE_KEY } from 'modules/inventory/distribution-centers/constants';
import { warehouseBasicSchema } from 'modules/inventory/warehouse/schemas/warehouse.schema';
import { IDistributionCenters } from '../interfaces';

const initValues: Partial<IDistributionCenters> = {
  _id: '',
  name: '',
  description: '',
};

const useDistributionCentersBasicCreateForm = (onClose: () => void, defaultValues: Partial<IDistributionCenters> = initValues) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(warehouseBasicSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (basic: Partial<IDistributionCenters>) => DistributionCentersService.saveOrUpdate(basic),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([DISTRIBUTION_CENTERS_ONE_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successBasicUpdate'));
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
    formState,
    reset,
    values: formState.errors,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useDistributionCentersBasicCreateForm;
