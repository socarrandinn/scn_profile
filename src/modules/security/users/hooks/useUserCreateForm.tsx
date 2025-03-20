import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { UserAdminService } from 'modules/security/users/services';

const initialValue: IUser = {
  firstName: '',
  lastName: '',
  email: '',
  type: null,
  security: {
    roles: [],
  },
  space: null,
};

const useUserCreateForm = (validationScheme: any, onClose?: () => void, queryKey?: string) => {
  const { t } = useTranslation('account');
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    reset: resetForm,
    watch,
    setError,
    setValue,
  } = useForm({
    resolver: yupResolver(validationScheme),
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
        ...user,
        security: {
          roles: roles.map((item) => item._id),
        },
        space: user?.space,
      };
      return UserAdminService.saveOrUpdate(query);
    },
    {
      onSuccess: async () => {
        await queryClient.invalidateQueries([queryKey]);
        toast.success(t('successCreated'));
        onClose?.();
        resetForm();
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
    setValue,
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};
export default useUserCreateForm;
