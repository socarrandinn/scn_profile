import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import EmployeeServices from 'modules/rrhh/employee/common/services/employee.service';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { EMPLOYEE_ONE_KEY } from '../constants/queries';
import { useEmployeeDetail } from '../../employee-detail/common/context/EmployeeDetail';
import { UpdatePersonalEmployeeSchema } from 'modules/rrhh/employee/management/schemas/update-personal-employee.schema';
import { IEmployee, ISocialMediaInfo } from 'modules/rrhh/employee/common/interfaces';
import { IAction } from 'modules/rrhh/employee/common/interfaces/IViewMode';

interface IEmployeeISocialMediaInfoProps extends IEmployee {
  _id: string;
  social: ISocialMediaInfo;
}

export const useEmployeeSocialInfoUpdate = (employee: IEmployeeISocialMediaInfoProps, setViewMode?: IAction) => {
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
    (employee: IEmployeeISocialMediaInfoProps) =>
      EmployeeServices.updateSocialMediaInfo(employee._id, employee?.social),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries([EMPLOYEE_ONE_KEY]);
        toast.success(t('successUpdate'));
        if (setEmployee) {
          // @ts-ignore
          setEmployee(data);
        }
        // Change view mode. For detail page only
        setViewMode && setViewMode((prev) => ({ ...prev, social: true }));
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
