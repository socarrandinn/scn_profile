import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useMemo } from 'react';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';
import {
  EmptyFilter,
  FilterFactory,
  TermFilter,
} from '@dofleini/query-builder';
import { USER_LIST_TYPES } from 'modules/security/users/constants/list-types.constant';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { UserAdminService } from 'modules/security/users/services';
import { UserProvidersService } from 'modules/security/user-providers/services';

export const useFindUsersTable = (type: SPACE_TYPE, status: USER_LIST_TYPES) => {
  const { filters, searchFunction } = useFetchUser(type, status);
  const { fetch, queryKey } = useTableRequest(searchFunction, filters);
  return useQuery([USERS_LIST_KEY, type, queryKey], fetch);
};

const useFetchUser = (type: SPACE_TYPE, status: USER_LIST_TYPES) => {
  return useMemo(() => {
    return {
      filters: getFiltersByStatus(status),
      searchFunction: getSearchFunctionByType(type),
    };
  }, [type, status]);
};

const getFiltersByStatus = (status: USER_LIST_TYPES) => {
  switch (status) {
    case USER_LIST_TYPES.ALL: {
      return new EmptyFilter();
    }
    case USER_LIST_TYPES.ACTIVE: {
      const filter = new TermFilter({ field: 'security.lock', value: false });
      return FilterFactory.add(filter, new TermFilter({ field: 'security.verified', value: true }));
    }
    case USER_LIST_TYPES.UNVERIFY: {
      const filter = new TermFilter({ field: 'security.lock', value: false });
      return FilterFactory.add(filter, new TermFilter({ field: 'security.verified', value: false }));
    }
    case USER_LIST_TYPES.LOCK: {
      return new TermFilter({ field: 'security.lock', value: true });
    }
  }
};
const getSearchFunctionByType = (type: SPACE_TYPE) => {
  switch (type) {
    case SPACE_TYPE.ROOT: {
      return UserAdminService.searchRootsUsers;
    }
    case SPACE_TYPE.PROVIDER: {
      return UserProvidersService.search;
    }
    case SPACE_TYPE.PUBLIC: {
      return UserAdminService.search;
    }
  }
};
