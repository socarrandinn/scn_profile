import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { userProviderSchema } from '../schemas/user.schema';
import { IUser } from 'modules/security/users/interfaces/IUser';
import UserServices from 'modules/security/users/services/user.services';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';

const initialValue: IUser = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  roles: [],

  // user provider
  type: null,
  store: null,
};

const useUserProviderCreateForm = (
  defaultValues: IUser = initialValue,
  onClose: () => void,
  withOutRoles: boolean = false,
) => {
  const { t } = useTranslation('account');
  const queryClient = useQueryClient();
  const {
    control,
    handleSubmit,
    reset,
    watch,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(userProviderSchema),
    defaultValues: defaultValues || initialValue,
  });

  const providerType = watch('type');

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  // @ts-ignore
  const {
    mutate,
    error,
    isLoading,
    isSuccess,
    data,
    reset: resetMutation,
  } = useMutation(
    (user: IUser) => {
      const roles = user?.security?.roles || [];
      const query = {
        _id: user?._id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        phone: undefined,
        security: {
          verified: true,
          look: false,
          roles: roles.map((item) => item._id),
        },
        onboardingCompleted: true,
      };
      if (withOutRoles) {
        delete (query.security as any).roles;
      }
      return UserServices.saveOrUpdate(query);
    },
    {
      onSuccess: (data, variables) => {
        queryClient.invalidateQueries([USERS_LIST_KEY]);
        if (variables._id) {
          queryClient.invalidateQueries([variables._id]);
        }
        toast.success(t('successUpdate'));
        onClose?.();
      },
    },
  );

  return {
    control,
    error,
    isLoading,
    isSuccess,
    data,
    providerType,
    reset: () => {
      resetMutation();
      reset();
    },
    // @ts-ignore
    onSubmit: handleSubmit((values) => {
      console.log(values);
      // mutate(values);
    }),
  };
};
export default useUserProviderCreateForm;
