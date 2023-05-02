import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { IChangePassword, PasswordType } from 'modules/security/users/interfaces/IChangePassword';
import UserServices from 'modules/security/users/services/user.services';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { CURRENT_USER_KEY } from '@dfl/react-security';
import { userRetypePasswordSchema } from 'modules/security/users/schemas/user.schema';
import { useEffect, useMemo } from 'react';
import { generatePassword } from 'modules/security/users/utils';
import { useLocation } from 'react-router';

type ResetPasswordProps = {
  password: string;
  confirm: string;
  changePasswordRequire: boolean;
  typePassword: PasswordType;
};

const initialValues = {
  password: '',
  confirm: '',
  changePasswordRequire: false,
  typePassword: PasswordType.GENERATE,
};

const useUserResetPasswordForm = (user: IUser | undefined, defaultValues: ResetPasswordProps = initialValues) => {
  const { t } = useTranslation('account');
  const queryClient = useQueryClient();
  const { control, handleSubmit, reset, watch, setValue } = useForm({
    resolver: yupResolver(userRetypePasswordSchema),
    defaultValues,
  });
  const { pathname } = useLocation();
  const isMe = useMemo(() => pathname?.includes('/user/me') ? 'me' : '', [pathname]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation<any, any, IChangePassword>(
    (dataForm: IChangePassword) => {
      return UserServices.resetPassword(
        isMe || user?._id,
        dataForm.password,
        dataForm.confirm,
        dataForm.changePasswordRequire || false,
      );
    },
    {
      onSuccess: () => {
        reset();
        queryClient.invalidateQueries([CURRENT_USER_KEY]);
        toast.success(t('securityTab.passwordSuccessfullyUpdated'));
      },
    },
  );

  const typePassword = watch('typePassword');

  useEffect(() => {
    const pass = generatePassword();
    if (typePassword === PasswordType.GENERATE) {
      setValue('password', pass);
      setValue('confirm', pass);
    }
    // eslint-disable-next-line
  }, [typePassword]);

  return {
    control,
    error,
    isLoading,
    isSuccess,
    typePassword,
    data,
    // @ts-ignore
    onSubmit: handleSubmit((values: IChangePassword) => {
      mutate(values);
    }),
  };
};
export default useUserResetPasswordForm;
