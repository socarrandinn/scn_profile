import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { LogisticsService } from 'modules/inventory/provider/logistics/services';
import { LOGISTICS_LIST_KEY } from 'modules/inventory/provider/logistics/constants';

export const useFindLogistics = () => {
  const { fetch, queryKey } = useTableRequest(LogisticsService.searchClean);

  return useQuery([LOGISTICS_LIST_KEY, queryKey], fetch);
};
