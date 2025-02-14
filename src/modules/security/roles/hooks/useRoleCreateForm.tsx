import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { roleSchema } from 'modules/security/roles/schemas/role.schema';
import { IRole } from 'modules/security/roles/interfaces';
import { RoleService } from 'modules/security/roles/services';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { invalidateRoleListQuery } from 'modules/security/roles/services/util.service';
import { SPACE_TYPE, SPACE_TYPES_MAP } from 'modules/security/users/constants/space-types.constants';
import { ROLE_ROUTE_MAP } from '../constants/role-provider.enum';

const initValues: IRole = {
  name: '',
  description: '',
  provider: '',
  icon: '',
};

const useRoleCreateForm = (onClose: () => void, defaultValues: IRole = initValues, type: SPACE_TYPE) => {
  const { t } = useTranslation('role');
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(roleSchema),
    defaultValues,
  });

  const service = useMemo(() => SPACE_TYPES_MAP[type], [type]);
  const route = useMemo(() => ROLE_ROUTE_MAP[type], [type]);

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const { mutate, error, isLoading, isSuccess, data } = useMutation(
    (role: IRole) => {
      return RoleService.saveOrUpdateByType(service, role);
    },
    {
      onSuccess: (data, values) => {
        invalidateRoleListQuery(queryClient, data);
        values?._id && queryClient.invalidateQueries([values?._id]);
        toast.success(t(values?._id ? 'successUpdate' : 'successCreated'));
        if (data?._id) {
          navigate(`/security/roles/${route}/${data?._id as string}/permissions`);
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
    onSubmit: handleSubmit((values) => {
      mutate(values);
    }),
  };
};

export default useRoleCreateForm;
