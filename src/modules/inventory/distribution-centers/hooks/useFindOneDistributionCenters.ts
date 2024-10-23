import { useQuery } from '@tanstack/react-query';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';
import { DISTRIBUTION_CENTERS_ONE_KEY } from 'modules/inventory/distribution-centers/constants';
import { useCallback } from 'react';
import { IDistributionCenters } from 'modules/inventory/distribution-centers/interfaces';

export const useFindOneDistributionCenters = (id: string | null) => {
  const fetch = useCallback(() => DistributionCentersService.getOne(id as string), [id]);
  return useQuery<IDistributionCenters>([id, DISTRIBUTION_CENTERS_ONE_KEY], fetch, { enabled: !!id });
};
