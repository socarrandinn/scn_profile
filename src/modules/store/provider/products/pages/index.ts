import { lazy } from 'react';

const loadProductsList = () => import('modules/store/provider/products/pages/ProductsList');
export const ProductsList = lazy(loadProductsList);

const loadPrevedorProductDetails = () => import('modules/store/provider/products/containers/ProvedorProductsDetailContainer');
export const ProvedorProducts = lazy(loadPrevedorProductDetails);
