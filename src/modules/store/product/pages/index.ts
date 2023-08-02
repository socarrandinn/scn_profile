import { lazy } from 'react';

const loadProductList = () => import('modules/store/product/pages/ProductList');
export const ProductList = lazy(loadProductList);

const loadCreateProduct = () => import('modules/store/product/pages/CreateProduct');
export const CreateProduct = lazy(loadCreateProduct);

const loadProductDetails = () => import('modules/store/product/pages/ProductDetails');
export const ProductDetails = lazy(loadProductDetails);
