import { lazy } from 'react';

const loadCategoryList = () => import('modules/store/product/settings/category/pages/CategoryList');
export const CategoryList = lazy(loadCategoryList);
