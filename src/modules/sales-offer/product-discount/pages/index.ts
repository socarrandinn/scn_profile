import { lazy } from 'react';

const loadProductDiscountList = () => import('modules/sales-offer/product-discount/pages/ProductDiscountList');
export const ProductDiscountList = lazy(loadProductDiscountList);

const loadCreateProductDiscount = () => import('modules/sales-offer/product-discount/pages/CreateProductDiscount')
export const CreateProductDiscount = lazy(loadCreateProductDiscount)

const loadProductDiscountDetails = () => import('modules/sales-offer/product-discount/pages/ProductDiscountDetails')
export const EditProductDiscount = lazy(loadProductDiscountDetails)
