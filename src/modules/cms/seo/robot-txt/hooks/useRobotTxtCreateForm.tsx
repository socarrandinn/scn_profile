import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { robotTxtSchema } from 'modules/cms/seo/robot-txt/schemas/robot-txt.schema';
import { IRobotTxt } from 'modules/cms/seo/robot-txt/interfaces';
import { RobotTxtService } from 'modules/cms/seo/robot-txt/services';
import { ROBOT_TXTS_LIST_KEY } from 'modules/cms/seo/robot-txt/constants';
import { useEffect } from 'react';

const initValues: IRobotTxt = {
  name: '',
  description: '',
};

const useRobotTxtCreateForm = (onClose: () => void, defaultValues: IRobotTxt = initValues) => {
  const { t } = useTranslation('robotTxt');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(robotTxtSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) reset(defaultValues);
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (robotTxt: IRobotTxt) => RobotTxtService.saveOrUpdate(robotTxt),
    {
      onSuccess: (data, values) => {
        queryClient.invalidateQueries([ROBOT_TXTS_LIST_KEY]);
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
export default useRobotTxtCreateForm;
