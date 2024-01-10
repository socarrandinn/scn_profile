import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { IRoleProvider } from 'modules/security/roles/interfaces';
import { RoleProvidersService } from 'modules/security/roles/services';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { invalidateRoleProviderListQuery } from 'modules/security/roles/services/util.service';
import { roleProviderSchema } from '../schemas/roleProvider.schema';

const initValues: IRoleProvider = {
  name: '',
  description: '',
  icon: '',
  type: '',
};

const useRoleProviderCreateForm = (onClose: () => void, defaultValues: IRoleProvider = initValues) => {
  const { t } = useTranslation('role');
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(roleProviderSchema),
    defaultValues,
  });

  useEffect(() => {
    // @ts-ignore
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (role: IRoleProvider) => {
      return RoleProvidersService.saveOrUpdate(role);
    },
    {
      onSuccess: (data, values) => {
        invalidateRoleProviderListQuery(queryClient, data);
        console.log('data', data);
        console.log('values', values);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        if (!values?._id) {
          navigate(`/security/roles/providers/${data._id as string}`);
        }
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

export default useRoleProviderCreateForm;
