import { useQuery } from '@tanstack/react-query';
import { StaticSiteMapItemService } from 'modules/cms/seo/static-site-map-item/services';
import { STATIC_SITE_MAP_ITEMS_ONE_KEY } from 'modules/cms/seo/static-site-map-item/constants';
import { useCallback } from 'react';
import { IStaticSiteMapItem } from 'modules/cms/seo/static-site-map-item/interfaces';

export const useFindOneStaticSiteMapItem = (id: string | null) => {
  const fetch = useCallback(() => StaticSiteMapItemService.getOne(id as string), [id]);
  return useQuery<IStaticSiteMapItem>([id, STATIC_SITE_MAP_ITEMS_ONE_KEY], fetch, { enabled: !!id });
};
