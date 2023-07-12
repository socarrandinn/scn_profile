import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { TimeOffPoliciesService } from 'modules/store/employee/settings/time-off-policies/services';
import {
  TIME_OFF_POLICIES_LIST_KEY,
  TIME_OFF_POLICY_KEY,
} from 'modules/store/employee/settings/time-off-policies/constants/queries';
import { useParams } from 'react-router';
import { ITimeOffPolicies } from 'modules/store/employee/settings/time-off-policies/interfaces';
import { timeOffPolicyInitValues } from 'modules/store/employee/settings/time-off-policies/constants/time-off-policy-init-value.constants';
import { timeOffPoliciesSchema } from 'modules/store/employee/settings/time-off-policies/schemas';

const initValues: ITimeOffPolicies = timeOffPolicyInitValues;

const useTimeOffPolicyCreateForm = (defaultValues: ITimeOffPolicies = initValues, onClose: () => void) => {
  const { t } = useTranslation('category');
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, watch, formState } = useForm({
    resolver: yupResolver(timeOffPoliciesSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (timeOffPolicies: ITimeOffPolicies) => TimeOffPoliciesService.saveOrUpdate(timeOffPolicies),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([TIME_OFF_POLICIES_LIST_KEY]);
        queryClient.invalidateQueries([TIME_OFF_POLICY_KEY, id]);
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
    errorValidations: formState.errors,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useTimeOffPolicyCreateForm;
