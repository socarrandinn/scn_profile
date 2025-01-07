import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { userSchema } from '../schemas/user.schema';
import { UserAdminService } from 'modules/security/users/services';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';

const initialValue: IUser = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  roles: [],
};

const useUserCreateForm = (
  onClose: () => void,
) => {
  const { t } = useTranslation('account');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset: resetForm,
    watch,
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
      return UserAdminService.saveOrUpdate(query);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([USERS_LIST_KEY]);
        toast.success(t('successCreated'));
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
    watch,
    data,
    reset,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useUserCreateForm;
