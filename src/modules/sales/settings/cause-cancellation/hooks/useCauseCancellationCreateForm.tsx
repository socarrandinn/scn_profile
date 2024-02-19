import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { causeCancellationSchema } from 'modules/sales/settings/cause-cancellation/schemas/cause-cancellation.schema';
import { ICauseCancellation } from 'modules/sales/settings/cause-cancellation/interfaces';
import { CauseCancellationService } from 'modules/sales/settings/cause-cancellation/services';
import { CAUSE_CANCELLATIONS_LIST_KEY } from 'modules/sales/settings/cause-cancellation/constants';
import { useEffect } from 'react';

const initValues: ICauseCancellation = {
  type: '',
  visibility: true,
};

const useCauseCancellationCreateForm = (onClose: () => void, defaultValues: ICauseCancellation = initValues) => {
  const { t } = useTranslation('causeCancellation');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(causeCancellationSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (causeCancellation: ICauseCancellation) => CauseCancellationService.saveOrUpdate(causeCancellation),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([CAUSE_CANCELLATIONS_LIST_KEY]);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
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
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useCauseCancellationCreateForm;
