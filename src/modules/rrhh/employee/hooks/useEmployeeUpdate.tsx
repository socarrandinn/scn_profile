import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IEmployeeUpdate } from 'modules/rrhh/employee/interfaces/IEmployee';
import EmployeeServices from 'modules/rrhh/employee/services/employee.service';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { EMPLOYEE_ONE_KEY } from '../constants/queries';
import { useEmployeeDetail } from '../contexts/EmployeeDetail';
import { UpdatePersonalEmployeeSchema } from 'modules/rrhh/employee/schemas/update-personal-employee.schema';
import { employeeEditInitValue } from 'modules/rrhh/employee/constants/employee-init-value.constant';

const initValues: IEmployeeUpdate = {
  ...employeeEditInitValue,
};

export const useEmployeeUpdate = (employee: IEmployeeUpdate = initValues) => {
  const { setEmployee } = useEmployeeDetail();
  const { t } = useTranslation('employee');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(UpdatePersonalEmployeeSchema),
    defaultValues: employee,
  });

  useEffect(() => {
    if (employee) {
      reset(employee);
    }
  }, [employee, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (employee: IEmployeeUpdate) => EmployeeServices.update(employee?._id, employee),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries([EMPLOYEE_ONE_KEY]);
        toast.success(t('successUpdate'));
        if (setEmployee) {
          setEmployee(data);
        }
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
