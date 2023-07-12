import { lazy } from 'react';

const loadCategoryList = () => import('modules/store/employee/settings/category/pages/CategoryList');
export const CategoryList = lazy(loadCategoryList);
