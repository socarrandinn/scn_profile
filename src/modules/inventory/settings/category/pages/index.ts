import { lazy } from 'react';

const loadCategoryList = () => import('modules/inventory/settings/category/pages/CategoryList');
export const CategoryList = lazy(loadCategoryList);

const loadCategoryDetail = () => import('modules/inventory/settings/category/pages/CategoryDetails');
export const CategoryDetail = lazy(loadCategoryDetail);
