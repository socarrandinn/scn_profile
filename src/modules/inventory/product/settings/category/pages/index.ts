import { lazy } from 'react';

const loadCategoryList = () => import('modules/inventory/product/settings/category/pages/CategoryList');
export const CategoryList = lazy(loadCategoryList);
