import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { WorkLocationService } from 'modules/inventory/product/settings/work-location/services';
import { WORK_LOCATIONS_LIST_KEY } from 'modules/inventory/product/settings/work-location/constants';

export const useFindWorkLocations = () => {
  const { fetch, queryKey } = useTableRequest(WorkLocationService.search);

  return useQuery([WORK_LOCATIONS_LIST_KEY, queryKey], fetch);
};
