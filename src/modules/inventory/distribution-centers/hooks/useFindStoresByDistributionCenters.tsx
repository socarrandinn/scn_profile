import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { WAREHOUSES_DISTRIBUTION_CENTER_LIST_KEY } from 'modules/inventory/distribution-centers/constants';
import { DistributionCentersService } from '../services';

export const useFindStoresByDistributionCenters = (distributionCenterId: string) => {
  const { fetch, queryKey } = useTableRequest((params, config) =>
    DistributionCentersService.searchWarehouse(distributionCenterId, params, config),
  );

  return useQuery([WAREHOUSES_DISTRIBUTION_CENTER_LIST_KEY, queryKey], fetch, { enabled: !!distributionCenterId });
};
