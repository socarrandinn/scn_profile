import { lazy } from 'react';

const loadOfferSettingMenu = () => import('./OfferSettingMenu');
export const OfferSettingMenu = lazy(loadOfferSettingMenu);
