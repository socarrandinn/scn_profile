import { lazy } from 'react';

const loadAdvertisementList = () => import('modules/rrhh/advertisement/pages/AdvertisementList');
export const AdvertisementList = lazy(loadAdvertisementList);
