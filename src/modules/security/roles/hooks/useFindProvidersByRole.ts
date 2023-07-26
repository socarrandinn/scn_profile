import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { selectServiceForProviderType } from '../utils';

export const useFindProvidersByRole = (providerType: string | undefined) => {
  const { fetch, queryKey } = useTableRequest(selectServiceForProviderType(providerType).search, {
    field: 'security.roles.role',
    value: providerType,
  });
  return useQuery([providerType, `providers-${providerType}`, queryKey], fetch);
};
