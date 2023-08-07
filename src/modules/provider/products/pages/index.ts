import { lazy } from 'react';

const loadProductsList = () => import('modules/provider/products/pages/ProductsList');
export const ProductsList = lazy(loadProductsList);

const loadPrevedorProductDetails = () => import('modules/provider/products/containers/ProvedorProductsDetailContainer');
export const ProvedorProducts = lazy(loadPrevedorProductDetails);
