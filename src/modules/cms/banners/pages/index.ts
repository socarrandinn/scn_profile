import { lazy } from 'react';

const loadBannerList = () => import('modules/cms/banners/pages/BannerList');
export const BannerList = lazy(loadBannerList);
