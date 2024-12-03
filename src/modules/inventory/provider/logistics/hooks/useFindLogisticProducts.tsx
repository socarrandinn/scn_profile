import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { LOGISTIC_PRODUCTS_LIST_KEY } from '../constants';
import { LogisticsService } from '../services';

export const useFindLogisticProducts = (logisticId: string | undefined) => {
  const { fetch, queryKey, filters, search } = useTableRequest((params, config) =>
    LogisticsService.productSearch({ ...params, logisticId }, config),
  );
  const query = useQuery([LOGISTIC_PRODUCTS_LIST_KEY, queryKey, logisticId], fetch, {
    enabled: !!logisticId,
  });

  return {
    ...query,
    filters,
    search
  };
};
