import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useMemo } from 'react';
import { USERS_INVITATION_LIST_KEY } from 'modules/security/users/constants/queries';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { UserInviteServices } from 'modules/security/users/services';
import { TermFilter } from '@dofleini/query-builder';

export const useFindUsersInvitationTable = (type: SPACE_TYPE) => {
  const { filters } = useFetchUserInvitation(type);
  const { fetch, queryKey } = useTableRequest(UserInviteServices.search, filters);
  return useQuery([USERS_INVITATION_LIST_KEY, type, queryKey], fetch);
};

const useFetchUserInvitation = (type: SPACE_TYPE) => {
  return useMemo(() => {
    return {
      filters: getFiltersByStatus(type),
    };
  }, [type]);
};

const getFiltersByStatus = (type: SPACE_TYPE) => {
  return new TermFilter({
    field: 'security.roles.type',
    value: type,
  });
};
