import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { EmployeeJobInformationService } from 'modules/rrhh/employee/services';
import { EMPLOYEE_JOB_INFORMATION_LIST_KEY } from 'modules/rrhh/employee/constants/queries';
import { JobInformation } from 'modules/rrhh/employee/interfaces';
import { Engagement } from 'modules/rrhh/employee/constants';
import { useParams } from 'react-router';
import { JobInformationSchema } from 'modules/rrhh/employee/schemas/job-information.schema';

const initValues: JobInformation = {
  notes: '',
  location: null,
  engagement: Engagement.FULL_TIME,
  reported: null,
  position: null,
  active: true,
  dateActivated: new Date(),
};

const useJobInformationCreateForm = (defaultValues: JobInformation = initValues, onClose: () => void) => {
  const { t } = useTranslation('category');
  const { id } = useParams();
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
export default useJobInformationCreateForm;
