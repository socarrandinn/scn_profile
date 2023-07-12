import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import EmployeeServices from 'modules/store/employee/common/services/employee.service';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { EMPLOYEE_ONE_KEY } from '../../../management/constants/queries';
import { useEmployeeDetail } from '../../common/context/EmployeeDetail';
import { UpdatePersonalEmployeeSchema } from 'modules/store/employee/management/schemas/update-personal-employee.schema';
import { IEmployee, IEmployeeGeneralInfo } from 'modules/store/employee/common/interfaces';
import { IAction } from 'modules/store/employee/common/interfaces/IViewMode';

interface IEmployeeGeneralInfoProps extends IEmployee {
  _id: string;
  general: IEmployeeGeneralInfo;
}

export const useEmployeeGeneralInfoUpdate = (employee: IEmployeeGeneralInfoProps, setViewMode?: IAction) => {
  const { setEmployee } = useEmployeeDetail();
  const { t } = useTranslation('employee');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, watch } = useForm({
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
    (employee: IEmployeeGeneralInfoProps) => EmployeeServices.updateGeneralInfo(employee._id, employee?.general),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries([EMPLOYEE_ONE_KEY]);
        toast.success(t('successUpdate'));
        if (setEmployee) {
          // @ts-ignore
          setEmployee(data);
        }
        // Change view mode. For detail page only
        setViewMode && setViewMode((prev) => ({ ...prev, general: true }));
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
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
