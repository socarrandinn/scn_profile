import { lazy } from 'react';

const loadCategoryList = () => import('modules/store/settings/category/pages/CategoryList');
export const CategoryList = lazy(loadCategoryList);
