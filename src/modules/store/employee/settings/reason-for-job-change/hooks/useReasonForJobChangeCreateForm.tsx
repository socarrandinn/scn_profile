import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { reasonForJobChangeSchema } from 'modules/store/employee/settings/reason-for-job-change/schemas/reasonForJobChange.schema';
import { IReasonForJobChange } from 'modules/store/employee/settings/reason-for-job-change/interfaces';
import { ReasonForJobChangeService } from 'modules/store/employee/settings/reason-for-job-change/services';
import { REASON_FOR_JOB_CHANGES_LIST_KEY } from 'modules/store/employee/settings/reason-for-job-change/constants/queries';
import { useEffect } from 'react';

const initValues: IReasonForJobChange = {
  name: '',
  description: '',
};

const useReasonForJobChangeCreateForm = (onClose: () => void, defaultValues: IReasonForJobChange = initValues) => {
  const { t } = useTranslation('reasonForJobChange');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(reasonForJobChangeSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (reasonForJobChange: IReasonForJobChange) => ReasonForJobChangeService.saveOrUpdate(reasonForJobChange),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([REASON_FOR_JOB_CHANGES_LIST_KEY]);
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
export default useReasonForJobChangeCreateForm;
