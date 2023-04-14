import { yupResolver } from '@hookform/resolvers/yup';
import { IRole } from 'modules/security/roles/interfaces';
import { RoleService } from 'modules/security/roles/services';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { userAddRolesSchema } from '../schemas/user.schema';

const useAddRolesToUsers = ({ defaultValues }: { defaultValues: any }) => {
  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(userAddRolesSchema),
    defaultValues,
  });

  // @ts-ignore
  const { mutate, error, isLoading, isSuccess, data } = useMutation((role: IRole) => RoleService.saveOrUpdate(role), {
    onSuccess: (data, values) => {},
  });

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

export default useAddRolesToUsers;
