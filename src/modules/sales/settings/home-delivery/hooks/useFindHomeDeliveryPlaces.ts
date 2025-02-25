import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { HOME_DELIVERIES_PLACES_KEY } from 'modules/sales/settings/home-delivery/constants';
import { HomeDeliveryPlacesService } from 'modules/sales/settings/home-delivery/services';
import { useMemo } from 'react';
import { OperatorFilter, TermFilter } from '@dofleini/query-builder';
import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';

export const useFindHomeDeliveryPlaces = (type?: LOCATION_TYPE, country?: string | null, state?: string | null) => {
  const filters = useMemo(() => {
    const typeFilter = new TermFilter({ field: 'location.type', value: type, objectId: false }).toQuery();
    const stateFilter = new TermFilter({ field: 'location.state', value: state, objectId: false }).toQuery();
    const cityFilter = new TermFilter({ field: 'location.city', value: { $ne: null } }).toQuery();
    const countryFilter = new TermFilter({ field: 'location.country', value: country, objectId: false }).toQuery();

    if (state) {
      return new OperatorFilter({
        type: 'AND',
        filters: [typeFilter, stateFilter, cityFilter],
      });
    }

    if (country) {
      return new OperatorFilter({
        type: 'AND',
        filters: [
          typeFilter,
          countryFilter,
          new TermFilter({ field: 'location.state', value: { $ne: null } }).toQuery(),
        ],
      });
    }
    if (type) return typeFilter;
  }, [type, country, state]);

  const { fetch, queryKey } = useTableRequest(HomeDeliveryPlacesService.search, filters);

  return useQuery([HOME_DELIVERIES_PLACES_KEY, queryKey, state, type], fetch);
};
