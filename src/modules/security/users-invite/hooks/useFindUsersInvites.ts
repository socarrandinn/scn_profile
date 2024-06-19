import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { UsersInviteService } from 'modules/security/users-invite/services';
import { USERS_INVITES_LIST_KEY } from 'modules/security/users-invite/constants';

export const useFindUsersInvites = () => {
  const { fetch, queryKey } = useTableRequest(UsersInviteService.search);

  return useQuery([USERS_INVITES_LIST_KEY, queryKey], fetch);
};
