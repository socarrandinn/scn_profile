import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ProviderUsersService } from 'modules/inventory/provider/supplier/services';
import { SUPPLIER_USERS_KEY } from 'modules/inventory/provider/supplier/constants';

export const useFindProvidersUsersTable = (provider: string) => {
  const { fetch } = useTableRequest(ProviderUsersService.search, null, { pathOptions: { provider } });

  return useQuery([SUPPLIER_USERS_KEY, provider], fetch);
};
