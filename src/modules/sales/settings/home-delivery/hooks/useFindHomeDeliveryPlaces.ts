import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { HOME_DELIVERIES_PLACES_KEY } from 'modules/sales/settings/home-delivery/constants';
import { HomeDeliveryPlacesService } from 'modules/sales/settings/home-delivery/services';
import { useMemo } from 'react';
import { OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';

export const useFindHomeDeliveryPlaces = (type: LOCATION_TYPE, country?: string | null, state?: string | null) => {
  const { distributionCenterId } = useDistributionCenterDetail();

  const filters = useMemo(() => {
    const filterList = [];

    if (type) {
      filterList.push(new TermFilter({ field: 'location.type', value: type, objectId: false }).toQuery());
    }
    if (country) {
      filterList.push(new TermFilter({ field: 'location.country', value: country, objectId: false }).toQuery());
      filterList.push(new TermFilter({ field: 'location.state', value: { $ne: null } }).toQuery());
    }
    if (state) {
      filterList.push(new TermFilter({ field: 'location.state', value: state, objectId: false }).toQuery());
      filterList.push(new TermFilter({ field: 'location.city', value: { $ne: null } }).toQuery());
    }
    if (distributionCenterId) {
      filterList.push(new TermFilter({ field: 'space', value: distributionCenterId, objectId: true }).toQuery());
    }

    if (filterList.length > 1) {
      return new OperatorFilter({ type: 'AND', filters: filterList });
    }

    return filterList[0] || undefined;
  }, [type, country, state, distributionCenterId]);

  const { fetch, queryKey } = useTableRequest(HomeDeliveryPlacesService.search, filters);

  return useQuery([HOME_DELIVERIES_PLACES_KEY, queryKey, state, type, distributionCenterId], fetch, {
    enabled: !!type,
  });
};
