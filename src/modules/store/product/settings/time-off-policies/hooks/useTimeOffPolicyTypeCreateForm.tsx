import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { TimeOffPolicyTypesService } from 'modules/store/product/settings/time-off-policies/services';
import {
  TIME_OFF_POLICY_TYPE_KEY,
  TIME_OFF_POLICY_TYPES_LIST_KEY,
} from 'modules/store/product/settings/time-off-policies/constants/queries';
import { useParams } from 'react-router';
import { ITimeOffPolicyType } from 'modules/store/product/settings/time-off-policies/interfaces';
import { timeOffPolicyTypeInitValues } from 'modules/store/product/settings/time-off-policies/constants/time-off-policy-type-init-value.constants';
import { timeOffTypesSchema } from 'modules/store/product/settings/time-off-policies/schemas';

const initValues: ITimeOffPolicyType = timeOffPolicyTypeInitValues;

const useTimeOffPolicyTypeCreateForm = (defaultValues: ITimeOffPolicyType = initValues, onClose: () => void) => {
  const { t } = useTranslation('category');
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, watch } = useForm({
    resolver: yupResolver(timeOffTypesSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    // @ts-ignore
    (timeOffType: ITimeOffPolicyType) => TimeOffPolicyTypesService.saveOrUpdate(timeOffType),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([TIME_OFF_POLICY_TYPES_LIST_KEY]);
        queryClient.invalidateQueries([TIME_OFF_POLICY_TYPE_KEY, id]);
        toast.success(t('successCreated'));
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
    watch,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useTimeOffPolicyTypeCreateForm;
