import UserServices from 'modules/security/users/services/user.services';
import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useMemo } from 'react';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';

export const useFindUsersTable = () => {
  const { fetch, queryKey } = useTableRequest(UserServices.search);

  return useQuery([USERS_LIST_KEY, 'ADMIN', queryKey], fetch);
};

export const useFindUsers = (search: string, filters?: any, page?: number, rowsPerPage?: number) => {
  const { fetch, queryKey } = useMemo(() => {
    const currentPage = page || 0;
    const size = rowsPerPage || 20;
    const payload = {
      search,
      filters,
      page: currentPage + 1,
      size,
    };
    const fetch = () => UserServices.search(payload);
    return {
      queryKey: payload,
      fetch,
    };
  }, [search, page, filters, rowsPerPage]);

  return useQuery([USERS_LIST_KEY, queryKey], fetch);
};
