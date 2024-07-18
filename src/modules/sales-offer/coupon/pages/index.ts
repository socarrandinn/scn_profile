import { lazy } from 'react';

const loadCouponList = () => import('modules/sales-offer/coupon/pages/CouponList');
export const CouponList = lazy(loadCouponList);

const loadCouponCreate = () => import('modules/sales-offer/coupon/pages/CouponCreate');
export const CouponCreate = lazy(loadCouponCreate);

const loadCouponEdit = () => import('modules/sales-offer/coupon/pages/CouponEdit');
export const CouponEdit = lazy(loadCouponEdit);
