import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { selectServiceForProviderType } from '../utils';

export const useFindProductProviders = (providerType: string | undefined) => {
  const { fetch, queryKey } = useTableRequest(selectServiceForProviderType(providerType).search);
  return useQuery([providerType, `${providerType}-providers`, queryKey], fetch);
};
