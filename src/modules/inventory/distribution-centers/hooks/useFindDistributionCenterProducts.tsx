import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { useDistributionCenterDetail } from '../context/DistributioncentersContext';
import { DistributionCentersService } from '../services';
import { DISTRIBUTION_CENTER_PRODUCT_LIST_KEY } from '../constants';

export const useFindDistributionCenterProducts = () => {
  const { distributionCenterId } = useDistributionCenterDetail();

  const { fetch, queryKey, filters } = useTableRequest((params, config) =>
    DistributionCentersService.searchProducts(distributionCenterId, params, config),
  );
  const query = useQuery([DISTRIBUTION_CENTER_PRODUCT_LIST_KEY, queryKey], fetch, {
    enabled: !!distributionCenterId,
  });

  return {
    ...query,
    filters,
  };
};
