import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { USERS_LIST_KEY } from 'modules/security/users/constants/queries';
import { ProviderUsersService } from 'modules/inventory/provider/supplier/services';

export const useFindProvidersUsersTable = (provider: string) => {
  const { fetch, queryKey } = useTableRequest(ProviderUsersService.search, null, { pathOptions: { provider } });

  return useQuery([USERS_LIST_KEY, provider, queryKey], fetch);
};
