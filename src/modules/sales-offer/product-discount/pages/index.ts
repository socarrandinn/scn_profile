import { lazy } from 'react';

const loadProductDiscountList = () => import('modules/sales-offer/product-discount/pages/ProductDiscountList');
export const ProductDiscountList = lazy(loadProductDiscountList);
