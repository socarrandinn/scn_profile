import { lazy } from 'react';

const loadStaticSiteMapItemList = () => import('modules/cms/seo/static-site-map-item/pages/StaticSiteMapItemList');
export const StaticSiteMapItemList = lazy(loadStaticSiteMapItemList);
