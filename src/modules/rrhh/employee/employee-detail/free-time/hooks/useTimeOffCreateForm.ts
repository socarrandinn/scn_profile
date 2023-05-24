import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { IEmployeeTimeOff } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';
import { TimeOffStatusEnum } from 'modules/rrhh/employee/employee-detail/free-time/constants/timeoffStatus.enum';
import { timeOffSchema } from 'modules/rrhh/employee/employee-detail/free-time/schemas/timeOffSchema';
import { EmployeeTimeOffService } from 'modules/rrhh/employee/management/services';
import { TIME_OFF_LIST_KEY } from 'modules/rrhh/employee/employee-detail/free-time/constants/timeoff.queries';

const initValues: IEmployeeTimeOff = {
  _id: '',
  employee: '',
  startDate: '',
  endDate: '',
  amount: 0,
  status: TimeOffStatusEnum.IN_PROGRESS,
};

const useTimeOffCreateForm = (onClose: () => void, defaultValues: IEmployeeTimeOff = initValues) => {
  const { t } = useTranslation('employee');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(timeOffSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (timeOff: IEmployeeTimeOff) => EmployeeTimeOffService.saveOrUpdate(timeOff),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([TIME_OFF_LIST_KEY]);
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
export default useTimeOffCreateForm;
