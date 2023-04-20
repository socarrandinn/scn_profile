import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { employeeSchema } from 'modules/rrhh/employee/schemas/employee.schema';
import { IEmployee } from 'modules/rrhh/employee/interfaces';
import { EmployeeService } from 'modules/rrhh/employee/services';
import { EMPLOYEES_LIST_KEY } from 'modules/rrhh/employee/constants';
import { useEffect } from 'react';

const initValues: any = {};

const useEmployeeCreateForm = (onClose: () => void, defaultValues: IEmployee = initValues) => {
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
    (employee: IEmployee) => EmployeeService.saveOrUpdate(employee),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([EMPLOYEES_LIST_KEY]);
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
export default useEmployeeCreateForm;
