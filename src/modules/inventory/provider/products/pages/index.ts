import { lazy } from 'react';

const loadProductsList = () => import('modules/inventory/provider/products/pages/ProductsList');
export const ProductsList = lazy(loadProductsList);

const loadPrevedorProductDetails = () => import('modules/inventory/provider/products/containers/ProvedorProductsDetailContainer');
export const ProvedorProducts = lazy(loadPrevedorProductDetails);
