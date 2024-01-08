import { lazy } from 'react';

const loadProductList = () => import('modules/inventory/product/pages/ProductList');
export const ProductList = lazy(loadProductList);

const loadCreateProduct = () => import('modules/inventory/product/pages/CreateProduct');
export const CreateProduct = lazy(loadCreateProduct);

const loadProductDetails = () => import('modules/inventory/product/pages/ProductDetails');
export const ProductDetails = lazy(loadProductDetails);
