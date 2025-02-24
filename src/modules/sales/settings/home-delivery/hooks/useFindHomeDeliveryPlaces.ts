import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { HOME_DELIVERIES_PLACES_KEY } from 'modules/sales/settings/home-delivery/constants';
import { HomeDeliveryPlacesService } from 'modules/sales/settings/home-delivery/services';
import { useMemo } from 'react';
import { OperatorFilter, TermFilter } from '@dofleini/query-builder';

export const useFindHomeDeliveryPlaces = (state?: string | null) => {
  const filters = useMemo(() => {
    const stateFilter = new TermFilter({ field: 'location.state', value: state, objectId: false }).toQuery();
    if (state) {
      return new OperatorFilter({
        type: 'AND',
        filters: [stateFilter, new TermFilter({ field: 'location.city', value: { $ne: null } })],
      }).toQuery();
    }
    return null;
  }, [state]);
  const { fetch, queryKey } = useTableRequest(HomeDeliveryPlacesService.search, filters);

  return useQuery([HOME_DELIVERIES_PLACES_KEY, queryKey, state, filters], fetch);
};
