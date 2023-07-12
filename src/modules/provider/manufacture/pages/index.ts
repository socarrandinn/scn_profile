import { lazy } from 'react';

const loadManufactureList = () => import('modules/provider/manufacture/pages/ManufactureList');
export const ManufactureList = lazy(loadManufactureList);

const loadManufactureDetail = () => import('modules/provider/manufacture/containers/ManufactureDetailsContainer');
export const ManufactureDetail = lazy(loadManufactureDetail);
