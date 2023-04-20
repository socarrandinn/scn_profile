import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { employeeSchema } from 'modules/rrhh/employee/schemas/employee.schema';
import { IEmployee, IEmployeeCreate } from 'modules/rrhh/employee/interfaces';
import { EmployeeService } from 'modules/rrhh/employee/services';
import { EMPLOYEES_LIST_KEY } from 'modules/rrhh/employee/constants';
import { useEffect } from 'react';

const useEmployeeCreateForm = (onClose: () => void, defaultValues: IEmployeeCreate) => {
  const { t } = useTranslation('employee');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(employeeSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (employee: IEmployeeCreate) => EmployeeService.save(employee),
    {
      onSuccess: (data: IEmployee, values) => {
        queryClient.invalidateQueries([EMPLOYEES_LIST_KEY]);
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
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useEmployeeCreateForm;
