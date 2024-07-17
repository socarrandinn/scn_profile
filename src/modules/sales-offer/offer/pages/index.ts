import { lazy } from 'react';

const loadOfferList = () => import('modules/sales-offer/offer/pages/OfferList');
export const OfferList = lazy(loadOfferList);
