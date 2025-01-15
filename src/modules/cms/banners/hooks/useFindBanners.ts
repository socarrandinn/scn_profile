import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { BannerService } from '../services';
import { BANNERS_LIST_KEY } from '../constants';

export const useFindBanners = () => {
  const { fetch, queryKey } = useTableRequest(BannerService.search);

  return useQuery([BANNERS_LIST_KEY, queryKey], fetch);
};
