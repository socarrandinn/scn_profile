import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useMemo } from 'react';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { UserInviteService } from 'modules/security/users/services';

export const useFindUsersInvitationTable = (type: SPACE_TYPE) => {
  const { searchFunction } = useFetchUsersInvitation(type);
  const { fetch, queryKey } = useTableRequest(searchFunction);
  return useQuery([USERS_LIST_KEY, type, queryKey], fetch);
};

const useFetchUsersInvitation = (type: SPACE_TYPE) => {
  return useMemo(() => {
    return {
      searchFunction: getSearchFunctionByType(type),
    };
  }, [type]);
};
const getSearchFunctionByType = (type: SPACE_TYPE) => {
  switch (type) {
    case SPACE_TYPE.ROOT: {
      return UserInviteService.searchAdmins;
    }
    case SPACE_TYPE.PROVIDER: {
      return UserInviteService.searchProviders;
    }
    case SPACE_TYPE.PUBLIC: {
      return UserInviteService.search;
    }
  }
};
