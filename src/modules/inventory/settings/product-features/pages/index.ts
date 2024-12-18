import { lazy } from 'react';

const loadProductFeatureList = () => import('modules/inventory/settings/product-features/pages/ProductFeatureList');
export const ProductFeatureList = lazy(loadProductFeatureList);
