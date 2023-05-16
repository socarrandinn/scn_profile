import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { AdvertisementService } from 'modules/rrhh/advertisement/services';
import { ADVERTISEMENTS_LIST_KEY } from 'modules/rrhh/advertisement/constants';

export const useFindAdvertisements = () => {
  const { fetch, queryKey } = useTableRequest(AdvertisementService.search);

  return useQuery([ADVERTISEMENTS_LIST_KEY, queryKey], fetch);
};
