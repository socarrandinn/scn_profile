import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { HOME_DELIVERIES_PLACES_KEY } from 'modules/sales/settings/home-delivery/constants';
import { HomeDeliveryPlacesService } from 'modules/sales/settings/home-delivery/services';
import { TermFilter } from '@dofleini/query-builder';
import { useMemo } from 'react';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';

export const useFindShippingSettings = (id?: string | null) => {
  const { distributionCenterId } = useDistributionCenterDetail();
  const filters = useMemo(() => {
    return new TermFilter({ field: '_id', value: id, objectId: true }).toQuery();
  }, [id]);

  const { fetch, queryKey } = useTableRequest(
    (params: any) => HomeDeliveryPlacesService.search({ ...params, space: distributionCenterId }),
    filters,
  );

  return useQuery([HOME_DELIVERIES_PLACES_KEY, id, queryKey, filters, distributionCenterId], fetch, {
    enabled: !!id,
  });
};
