import { useMemo } from 'react';
import { InFilter } from '@dofleini/query-builder';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { LOGISTIC_DISTRIBUTION_CENTERS_LIST_KEY } from '../constants';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';
// import { TermFilter } from '@dofleini/query-builder';

export const useFindLogisticDistributionCenters = (logisticProviderId: string | undefined) => {
  const filter = useMemo(() => {
    return new InFilter({ field: 'logistic._id', objectId: true, value: [logisticProviderId] });
  }, [logisticProviderId]);

  const { fetch, queryKey, filters } = useTableRequest(DistributionCentersService.search, filter);
  const query = useQuery([LOGISTIC_DISTRIBUTION_CENTERS_LIST_KEY, queryKey], fetch, {
    enabled: !!logisticProviderId,
  });

  return {
    ...query,
    filters,
  };
};
