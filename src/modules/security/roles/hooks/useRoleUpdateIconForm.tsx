import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {RoleService} from 'modules/security/roles/services';
import {IRole} from 'modules/security/roles/interfaces';
import {ROLES_LIST_KEY, ROLES_ONE_KEY} from 'modules/security/roles/constants/queries';
import {roleIconSchema} from 'modules/security/roles/schemas/role.schema';

const useRoleUpdateIconForm = (role: IRole | undefined, onClose?: () => void) => {
    const queryClient = useQueryClient();
    const {control, handleSubmit, reset, setValue} = useForm<{ avatar: any }>({
        resolver: yupResolver(roleIconSchema),
        defaultValues: {avatar: role?.icon},
    });

    // @ts-ignore
    const {mutate, error, isLoading, isSuccess, data} = useMutation<any, any, { avatar: string }>(
        (avatar: { avatar: string }) => {
            return RoleService.updateAvatar(role?._id, avatar.avatar);
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries([role?._id, ROLES_ONE_KEY]);
                queryClient.invalidateQueries([ROLES_LIST_KEY]);
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
        setValue,
        onSubmit: handleSubmit((values) => {
            mutate(values as any);
        }),
    };
};

export default useRoleUpdateIconForm;
