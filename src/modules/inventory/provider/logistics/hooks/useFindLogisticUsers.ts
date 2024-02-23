import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { ProviderUsersService } from 'modules/inventory/provider/supplier/services';
import { LOGISTIC_USERS_KEY } from 'modules/inventory/provider/logistics/constants';

export const useFindLogisticUsers = (provider: string) => {
  const { fetch } = useTableRequest(ProviderUsersService.search, null, { pathOptions: { provider } });

  return useQuery([LOGISTIC_USERS_KEY, provider], fetch);
};
