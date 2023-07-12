import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { workLocationSchema } from 'modules/store/employee/settings/work-location/schemas/work-location.schema';
import { IWorkLocation } from 'modules/store/employee/settings/work-location/interfaces';
import { WorkLocationService } from 'modules/store/employee/settings/work-location/services';
import { WORK_LOCATIONS_LIST_KEY } from 'modules/store/employee/settings/work-location/constants';
import { useEffect } from 'react';

const initValues: IWorkLocation = {
  name: '',
  description: '',
};

const useWorkLocationCreateForm = (onClose: () => void, defaultValues: IWorkLocation = initValues) => {
  const { t } = useTranslation('workLocation');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(workLocationSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (workLocation: IWorkLocation) => WorkLocationService.saveOrUpdate(workLocation),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([WORK_LOCATIONS_LIST_KEY]);
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
export default useWorkLocationCreateForm;
