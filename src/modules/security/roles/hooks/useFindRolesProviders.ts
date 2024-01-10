import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { RoleProvidersService } from 'modules/security/roles/services';
import { ROLES_PROVIDERS_LIST_KEY } from 'modules/security/roles/constants/queries';
import { useMemo, useRef } from 'react';
import { STALE_TIME } from 'settings/query';

export const useFindRolesProvidersTable = () => {
  const { fetch, queryKey } = useTableRequest(RoleProvidersService.search);
  return useQuery([ROLES_PROVIDERS_LIST_KEY, queryKey], fetch, { staleTime: STALE_TIME });
};

export const useFindRolesProviders = (search: string, options?: any, enabled?: boolean) => {
  const { filters, page, size: rowsPerPage } = options || {};
  const areAll = useRef({ areAll: false });

  const { fetch, queryKey } = useMemo(() => {
    const currentPage: number = page || 0;
    const size = rowsPerPage || 70;
    const overwriteSearch = areAll.current.areAll ? '' : search || '';
    const payload = {
      search: overwriteSearch.toLowerCase(),
      filters,
      page: currentPage + 1,
      size,
    };

    const fetch = async () => {
      const data = await RoleProvidersService.search(payload);
      if (!search && !currentPage && !data.hasMore) {
        areAll.current.areAll = true;
      }
      return data;
    };

    return {
      queryKey: payload,
      fetch,
    };
  }, [search, page, filters, rowsPerPage]);

  return useQuery([ROLES_PROVIDERS_LIST_KEY, queryKey], fetch, { staleTime: STALE_TIME * 4, enabled });
};
