import { lazy } from 'react';

const loadSupplierList = () => import('modules/inventory/provider/supplier/pages/SupplierList');
export const SupplierList = lazy(loadSupplierList);

const loadSupplierDetails = () => import('modules/inventory/provider/supplier/containers/SupplierDetailContainer');
export const Supplier = lazy(loadSupplierDetails);

const loadSupplierGeneralPage = () => import('modules/inventory/provider/supplier/pages/tabs/SupplierGeneralPage');
export const SupplierGeneralPage = lazy(loadSupplierGeneralPage);
