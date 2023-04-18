import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { reasonForCompensationChangeSchema } from 'modules/rrhh/settings/reason-for-compensation-change/schemas/reasonForCompensationChange.schema';
import { IReasonForCompensationChange } from 'modules/rrhh/settings/reason-for-compensation-change/interfaces';
import { ReasonForCompensationChangeService } from 'modules/rrhh/settings/reason-for-compensation-change/services';
import { REASON_FOR_COMPENSATION_CHANGES_LIST_KEY } from 'modules/rrhh/settings/reason-for-compensation-change/constants/queries';
import { useEffect } from 'react';

const initValues: IReasonForCompensationChange = {
  name: '',
  description: '',
};

const useReasonForCompensationChangeCreateForm = (onClose: () => void, defaultValues: IReasonForCompensationChange = initValues) => {
  const { t } = useTranslation('reasonForCompensationChange');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(reasonForCompensationChangeSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (reasonForCompensationChange: IReasonForCompensationChange) => ReasonForCompensationChangeService.saveOrUpdate(reasonForCompensationChange),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([REASON_FOR_COMPENSATION_CHANGES_LIST_KEY]);
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
export default useReasonForCompensationChangeCreateForm;
