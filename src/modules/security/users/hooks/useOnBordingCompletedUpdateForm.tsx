import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IOnBordingComplete, IUser } from 'modules/security/users/interfaces/IUser';
import UserServices from 'modules/security/users/services/user.services';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { USER_ME_KEY } from '../constants/queries';
import { onBordingCompletedSchema } from '../schemas/onbording.completed.schema';

const initValues: IOnBordingComplete = {
  onboardingCompleted: true,
  password: '',
};

const useOnBordingCompletedUpdateForm = (user: IUser, onbording: IOnBordingComplete = initValues) => {
  const { t } = useTranslation('account');
  const queryClient = useQueryClient();
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(onBordingCompletedSchema),
    defaultValues: onbording,
  });

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (onbording: IOnBordingComplete) =>
      UserServices.updateonOnBordindCompleted(user?._id, onbording.onboardingCompleted, onbording.password),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries([USER_ME_KEY]);
        toast.success(t('successUpdate'));
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
    onSubmit: handleSubmit((values: IOnBordingComplete) => {
      mutate(values);
    }),
  };
};
export default useOnBordingCompletedUpdateForm;
