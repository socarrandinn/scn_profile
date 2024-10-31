import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import { DISTRIBUTION_CENTER_PRODUCT_LIST_KEY } from 'modules/inventory/distribution-centers/constants';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';

export const useFindProductByDistributionCenters = () => {
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
