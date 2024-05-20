import { lazy } from 'react';

const loadStaticSiteMapItemTabs = () => import('modules/cms/seo/static-site-map-item/pages/StaticSiteMapItemTabs');
export const StaticSiteMapItemTabs = lazy(loadStaticSiteMapItemTabs);

const loadStaticSiteMapItem = () => import('modules/cms/seo/static-site-map-item/pages/StaticSiteMapItem');
export const StaticSiteMapItem = lazy(loadStaticSiteMapItem);

const loadStaticSiteMapItemList = () => import('modules/cms/seo/static-site-map-item/pages/StaticSiteMapItemList');
export const StaticSiteMapItemList = lazy(loadStaticSiteMapItemList);
