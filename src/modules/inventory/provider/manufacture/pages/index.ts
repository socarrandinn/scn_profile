import { lazy } from 'react';

const loadManufactureList = () => import('modules/inventory/provider/manufacture/pages/ManufactureList');
export const ManufactureList = lazy(loadManufactureList);

const loadManufactureDetail = () =>
  import('modules/inventory/provider/manufacture/containers/ManufactureDetailsContainer');
export const ManufactureDetail = lazy(loadManufactureDetail);
