import { lazy } from 'react';

const loadOfferList = () => import('modules/sales-offer/offer/pages/OfferList');
export const OfferList = lazy(loadOfferList);

const loadOfferCreate = () => import('modules/sales-offer/offer/pages/OfferCreate');
export const OfferCreate = lazy(loadOfferCreate);

const loadOfferEdit = () => import('modules/sales-offer/offer/pages/OfferEdit');
export const OfferEdit = lazy(loadOfferEdit);
