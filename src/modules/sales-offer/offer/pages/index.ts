import { lazy } from 'react';

const loadOfferList = () => import('modules/sales-offer/offer/pages/OfferList');
export const OfferList = lazy(loadOfferList);

const loadOfferCreate = () => import('modules/sales-offer/offer/pages/OfferCreate');
export const OfferCreate = lazy(loadOfferCreate);

const loadOfferDetails = () => import('modules/sales-offer/offer/pages/OfferDetails');
export const OfferDetails = lazy(loadOfferDetails);
