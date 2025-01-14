import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { COLLECTIONS_LIST_KEY } from 'modules/cms/collections/constants';
import { BannerService } from '../services';

export const useFindBanners = () => {
  const { fetch, queryKey } = useTableRequest(BannerService.search);

  return useQuery([COLLECTIONS_LIST_KEY, queryKey], fetch);
};
