import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { StaticSiteMapItemService } from 'modules/cms/seo/static-site-map-item/services';
import { STATIC_SITE_MAP_ITEMS_LIST_KEY } from 'modules/cms/seo/static-site-map-item/constants';

export const useFindStaticSiteMapItems = () => {
  const { fetch, queryKey } = useTableRequest(StaticSiteMapItemService.search);

  return useQuery([STATIC_SITE_MAP_ITEMS_LIST_KEY, queryKey], fetch);
};
