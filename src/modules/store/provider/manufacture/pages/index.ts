import { lazy } from 'react';

const loadManufactureList = () => import('modules/store/provider/manufacture/pages/ManufactureList');
export const ManufactureList = lazy(loadManufactureList);

const loadManufactureDetail = () => import('modules/store/provider/manufacture/containers/ManufactureDetailsContainer');
export const ManufactureDetail = lazy(loadManufactureDetail);
