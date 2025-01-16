import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { roleSchema } from 'modules/security/roles/schemas/role.schema';
import { IRole } from 'modules/security/roles/interfaces';
import { RoleService } from 'modules/security/roles/services';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { invalidateRoleListQuery } from 'modules/security/roles/services/util.service';

const initValues: IRole = {
  name: '',
  description: '',
  icon: '',
};

const useRoleCreateForm = (onClose: () => void, defaultValues: IRole = initValues) => {
  const { t } = useTranslation('role');
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(roleSchema),
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
    (role: IRole) => {
      return RoleService.saveOrUpdate(role);
    },
    {
      onSuccess: (data, values) => {
        invalidateRoleListQuery(queryClient, data);
        values?._id && queryClient.invalidateQueries([values._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        if (data?._id) {
          navigate(`/security/roles/system/${data._id}/permissions`);
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

export default useRoleCreateForm;
