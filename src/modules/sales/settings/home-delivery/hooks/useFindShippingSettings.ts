import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { HOME_DELIVERIES_PLACES_KEY } from 'modules/sales/settings/home-delivery/constants';
import { HomeDeliveryPlacesService } from 'modules/sales/settings/home-delivery/services';
import { TermFilter } from '@dofleini/query-builder';
import { useMemo } from 'react';

export const useFindShippingSettings = (id?: string | null) => {
  const filters = useMemo(() => {
    return new TermFilter({ field: '_id', value: id, objectId: false });
  }, [id]);

  const { fetch, queryKey } = useTableRequest(HomeDeliveryPlacesService.search, filters);

  return useQuery([HOME_DELIVERIES_PLACES_KEY, id, queryKey, filters], fetch, {
    enabled: !!id,
  });
};
