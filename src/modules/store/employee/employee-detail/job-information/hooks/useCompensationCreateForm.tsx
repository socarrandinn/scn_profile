import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { EmployeeCompensationService } from 'modules/store/employee/management/services';
import { EMPLOYEE_COMPENSATION_LIST_KEY, EMPLOYEE_ONE_KEY } from 'modules/store/employee/management/constants/queries';
import { ICompensation } from 'modules/store/employee/common/interfaces';
import { CompensationType, Frequency, PaymentType } from 'modules/store/employee/management/constants/compensation';
import { CompensationInfoSchema } from 'modules/store/employee/management/schemas/compensation.schema';
import { useEmployeeDetail } from 'modules/store/employee/employee-detail/common/context/EmployeeDetail';

const defaultValues: ICompensation = {
  type: CompensationType.SALARY,
  paymentType: PaymentType.ON_DEMAND,
  value: 0,
  frequency: Frequency.MONTHLY,
  dateActivated: new Date(),
  active: true,
  changeReason: null,
};

const useCompensationCreateForm = (onClose: () => void) => {
  const { t } = useTranslation('employee');
  const { id } = useEmployeeDetail();
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, watch } = useForm({
    resolver: yupResolver(CompensationInfoSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (compensation: ICompensation) => EmployeeCompensationService.update(id, compensation),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([EMPLOYEE_COMPENSATION_LIST_KEY]);
        queryClient.invalidateQueries([EMPLOYEE_ONE_KEY, id]);
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
export default useCompensationCreateForm;
