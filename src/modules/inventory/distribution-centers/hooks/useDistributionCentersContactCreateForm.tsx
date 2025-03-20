import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';
import { DISTRIBUTION_CENTERS_ONE_KEY } from 'modules/inventory/distribution-centers/constants';
import { warehouseContactSchema } from 'modules/inventory/warehouse/schemas/warehouse.schema';
import { IDistributionCenters } from '../interfaces';

const initValues: Partial<IDistributionCenters> = {
  _id: '',
  contacts: {
    emails: [],
    phones: [],
    mainEmail: '',
    mainPhone: '',
  },
};

const useDistributionCentersContactCreateForm = (
  onClose: () => void,
  defaultValues: Partial<IDistributionCenters> = initValues,
) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, formState } = useForm({
    resolver: yupResolver(warehouseContactSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (contacts: Partial<IDistributionCenters>) => DistributionCentersService.updateContact(contacts),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([DISTRIBUTION_CENTERS_ONE_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t('successContactUpdate'));
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
    formState,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useDistributionCentersContactCreateForm;
