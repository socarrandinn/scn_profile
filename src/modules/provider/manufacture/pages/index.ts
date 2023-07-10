import { lazy } from 'react';

const loadManufactureList = () => import('modules/provider/manufacture/pages/ManufactureList');
export const ManufactureList = lazy(loadManufactureList);
