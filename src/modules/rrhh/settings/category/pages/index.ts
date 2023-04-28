import { lazy } from 'react';

const loadCategoryList = () => import('modules/rrhh/settings/category/pages/CategoryList');
export const CategoryList = lazy(loadCategoryList);
