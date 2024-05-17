import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { robotTxtSchema } from 'modules/cms/seo/robot-txt/schemas/robot-txt.schema';
import { IRobotTxt } from 'modules/cms/seo/robot-txt/interfaces';
import { RobotTxtService } from 'modules/cms/seo/robot-txt/services';
import { ROBOT_TXT_CURRENT_KEY, ROBOT_TXTS_LIST_KEY } from 'modules/cms/seo/robot-txt/constants';
import { useEffect } from 'react';

const initValues: IRobotTxt = {
  data: '',
};

const useRobotTxtCreateForm = (defaultValues: IRobotTxt = initValues) => {
  const { t } = useTranslation('seo');
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
    (robotTxt: IRobotTxt) => RobotTxtService.save(robotTxt),
    {
      onSuccess: (data) => {
        if (data) {
          queryClient.invalidateQueries([ROBOT_TXTS_LIST_KEY]);
          queryClient.invalidateQueries([ROBOT_TXT_CURRENT_KEY]);
        }
        toast.success(t('robot_txt.successCreated'));
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
      mutate({ data: values?.data });
    }),
  };
};
export default useRobotTxtCreateForm;
