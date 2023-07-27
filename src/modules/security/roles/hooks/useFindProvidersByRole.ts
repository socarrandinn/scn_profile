import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { selectServiceForProviderType } from '../utils';
import { UserService } from 'modules/security/users/services';

const ROLES_PROVIDERS_USERS_LIST_KEY = 'ROLES_PROVIDERS_USERS_LIST_KEY';

export const useFindProvidersByRole = (roleId: string | undefined) => {
    const { fetch, queryKey } = useTableRequest(UserService.search, {
        field: 'security.roles.role',
        value: roleId,
    });
    return useQuery([ROLES_PROVIDERS_USERS_LIST_KEY, ROLES_PROVIDERS_USERS_LIST_KEY, queryKey], fetch);
};
