import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IUser } from 'modules/security/users/interfaces/IUser';
import UserServices from 'modules/security/users/services/user.services';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { userSchema } from '../schemas/user.schema';

const initialValue: IUser = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  roles: [],
};

const useUserCreateForm = (
  onClose: () => void,
  queryKey?: string,
) => {
  const { t } = useTranslation('account');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    setError,
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: initialValue,
  });

  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation(
    (user: Partial<IUser>) => {
      const roles = user?.security?.roles || [];
      const query = {
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        security: {
          roles: roles.map((item) => item._id),
        },
      };
      return UserServices.saveOrUpdate(query);
    },
    {
      onSuccess: () => {
        queryKey && queryClient.invalidateQueries([queryKey]);
        toast.success(t('successUpdate'));
        resetForm();
        onClose?.();
      },
      onError: (error: any) => {
        if (error?.message === 'Duplicated keys') {
          setError(error?.key?.[0], { message: 'errors:duplicatedValues' });
        }
      },
    },
  );

  const reset = useCallback(() => {
    resetMutation();
    resetForm();
  }, [resetForm, resetMutation]);

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useUserCreateForm;
