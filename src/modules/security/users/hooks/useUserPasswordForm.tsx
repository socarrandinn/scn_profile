import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IChangePassword } from 'modules/security/users/interfaces/IChangePassword';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { CURRENT_USER_KEY } from '@dfl/react-security';
import {
  changePasswordRequireSchema,
  onBoardingCompletedSchema,
} from 'modules/security/users/schemas/onbording.completed.schema';
import UserServices from 'modules/security/users/services/user.services';

const useUserPasswordForm = (lastPassword?: boolean) => {
  const { t } = useTranslation('account');
  const queryClient = useQueryClient();

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(lastPassword ? changePasswordRequireSchema : onBoardingCompletedSchema),
    defaultValues: {
      lastPassword: '',
      password: '',
      repeat_password: '',
    },
  });

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (dataForm: IChangePassword) => UserServices.updatePassword(dataForm.lastPassword, dataForm.password),
    {
      onSuccess: () => {
        reset();
        queryClient.invalidateQueries([CURRENT_USER_KEY]);
        toast.success(t('securityTab.passwordSuccessfullyUpdated'));
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
    onSubmit: handleSubmit(mutate),
  };
};

export default useUserPasswordForm;
