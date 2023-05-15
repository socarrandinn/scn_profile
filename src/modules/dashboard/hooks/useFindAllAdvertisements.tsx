import { useTableRequest } from '@dfl/mui-admin-layout';
import { useQuery } from '@tanstack/react-query';
import AdvertisementsService from 'modules/dashboard/services/advertisements.service';
import { ADVERTISEMENTS_LIST_KEY } from 'modules/dashboard/constants/queries';

export const useFindAllAdvertisements = () => {
  const { fetch, queryKey } = useTableRequest(AdvertisementsService.search);

  return useQuery([ADVERTISEMENTS_LIST_KEY, queryKey], fetch);
};
