import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';
import { DISTRIBUTION_CENTERS_LIST_KEY } from 'modules/inventory/distribution-centers/constants';

export const useFindDistributionCenters = () => {
  const { fetch, queryKey } = useTableRequest(DistributionCentersService.search);

  return useQuery([DISTRIBUTION_CENTERS_LIST_KEY, queryKey], fetch);
};
