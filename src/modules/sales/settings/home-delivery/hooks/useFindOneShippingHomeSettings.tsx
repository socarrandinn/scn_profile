import { useQuery } from '@tanstack/react-query';
import { HomeDeliveryService } from 'modules/sales/settings/home-delivery/services';
import { HOME_DELIVERIES_GLOBAL_KEY } from 'modules/sales/settings/home-delivery/constants';
import { useCallback, useMemo } from 'react';
import { IDelivery } from 'modules/sales/settings/common/interfaces';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';
import { TermFilter } from '@dofleini/query-builder';
import { d } from 'modules/sales/common/utils/order-delivery-max-time-transforms';

export const useFindOneShippingHomeSettings = () => {
  const { distributionCenterId } = useDistributionCenterDetail();

  const filters = useMemo(() => {
    if (distributionCenterId) {
      new TermFilter({ field: 'space', value: distributionCenterId, objectId: true }).toQuery();
    }
    return null;
  }, [distributionCenterId]);

  const fetch = useCallback(() => HomeDeliveryService.getSettings(filters), [filters]);
  return useQuery<IDelivery>([HOME_DELIVERIES_GLOBAL_KEY, distributionCenterId], fetch);
};
