import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { jobPositionSchema } from 'modules/inventory/product/settings/job-position/schemas/job-position.schema';
import { IJobPosition } from 'modules/inventory/product/settings/job-position/interfaces';
import { JobPositionService } from 'modules/inventory/product/settings/job-position/services';
import { JOB_POSITIONS_LIST_KEY } from 'modules/inventory/product/settings/job-position/constants';
import { useEffect } from 'react';

const initValues: IJobPosition = {
  name: '',
  description: '',
  requirements: '',
  responsibilities: '',
};

const useJobPositionCreateForm = (onClose: () => void, defaultValues: IJobPosition = initValues) => {
  const { t } = useTranslation('jobPosition');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(jobPositionSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (jobPosition: IJobPosition) => JobPositionService.saveOrUpdate(jobPosition),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([JOB_POSITIONS_LIST_KEY]);
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
export default useJobPositionCreateForm;
