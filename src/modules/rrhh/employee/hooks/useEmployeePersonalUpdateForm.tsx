import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IEmployeePersonalUpdate } from 'modules/rrhh/employee/interfaces/IEmployee';
import EmployeeServices from 'modules/rrhh/employee/services/employee.service';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { EMPLOYEE_ONE_KEY } from '../constants/queries';
import { useEmployeeDetail } from '../contexts/EmployeeDetail';
import { GenderEnum } from 'modules/rrhh/employee/constants/gender.enum';
import { CivilStatusEnum } from 'modules/rrhh/employee/constants/civil-status.enum';
import { UpdatePersonalEmployeeSchema } from 'modules/rrhh/employee/schemas/update-personal-employee.schema';

const initValues: IEmployeePersonalUpdate = {
  general: {
    firstName: '',
    lastName: '',
    ci: '',
    diseases: [],
    allergies: [],
    birthday: new Date(),
    gender: GenderEnum.male,
    civilStatus: CivilStatusEnum.single,
    notes: '',
  },
  address: {
    address: '',
    municipality: '',
    state: '',
    country: '',
    zipCode: '',
  },
  contacts: {
    phones: [],
    emails: [],
  },
  social: {
    facebook: '',
    instagram: '',
    linkendin: '',
    twitter: '',
  },
  hasUser: false,
  _id: '',
  metadata: {},
};

type ViewMode = {
  general: boolean;
  address: boolean;
  contacts: boolean;
  social: boolean;
};

type IAction = (values: ViewMode) => void;

const useEmployeePersonalUpdateForm = (employee: IEmployeePersonalUpdate = initValues, setViewMode?: IAction) => {
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
    (employee: IEmployeePersonalUpdate) => EmployeeServices.update(employee?._id, employee),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries([EMPLOYEE_ONE_KEY]);
        toast.success(t('successUpdate'));
        if (setEmployee) {
          setEmployee(data);
        }
        // Change view mode. For detail page only
        setViewMode && setViewMode({ general: true, address: true, contacts: true, social: true });
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
export default useEmployeePersonalUpdateForm;
