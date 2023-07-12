import { lazy } from 'react';

const loadCategoryList = () => import('modules/store/settings/category/pages/CategoryList');
export const CategoryList = lazy(loadCategoryList);

const loadCategoryDetail = () => import('modules/store/settings/category/pages/CategoryDetails');
export const CategoryDetail = lazy(loadCategoryDetail);
