import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { EmployeeJobInformationService } from 'modules/rrhh/employee/management/services';
import { EMPLOYEE_JOB_INFORMATION_LIST_KEY, EMPLOYEE_ONE_KEY } from 'modules/rrhh/employee/management/constants/queries';
import { JobInformation } from 'modules/rrhh/employee/common/interfaces';
import { Engagement } from 'modules/rrhh/employee/management/constants';
import { JobInformationSchema } from 'modules/rrhh/employee/management/schemas/job-information.schema';
import { useEmployeeDetail } from 'modules/rrhh/employee/employee-detail/common/context/EmployeeDetail';

const defaultValues: JobInformation & { isEnd: boolean } = {
  notes: '',
  location: null,
  engagement: Engagement.FULL_TIME,
  reported: null,
  position: null,
  team: null,
  active: true,
  changeReason: null,
  dateActivated: new Date(),
  endActivated: new Date(),
  isEnd: false,
};

const useJobInformationCreateForm = (onClose: () => void) => {
  const { t } = useTranslation('category');
  const { id } = useEmployeeDetail();
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, watch } = useForm({
    resolver: yupResolver(JobInformationSchema),
    defaultValues,
  });

  useEffect(() => {
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (jobInformation: JobInformation) => EmployeeJobInformationService.update(id, jobInformation),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([EMPLOYEE_JOB_INFORMATION_LIST_KEY]);
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
      if (values.isEnd) { delete values.endActivated; }
      mutate(values);
    }),
  };
};
export default useJobInformationCreateForm;
