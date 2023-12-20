import { lazy } from 'react';

const loadSupplierList = () => import('modules/inventory/provider/supplier/pages/SupplierList');
export const SupplierList = lazy(loadSupplierList);

const loadSupplierDetails = () => import('modules/inventory/provider/supplier/containers/SupplierDetailContainer');
export const Supplier = lazy(loadSupplierDetails);

// TABS
const loadSupplierGeneralPage = () => import('modules/inventory/provider/supplier/pages/tabs/SupplierGeneralPage');
export const SupplierGeneralPage = lazy(loadSupplierGeneralPage);

const loadSupplierInventoryPage = () => import('modules/inventory/provider/supplier/pages/tabs/SupplierInventoryPage');
export const SupplierInventoryPage = lazy(loadSupplierInventoryPage);

const loadSupplierProductsPage = () => import('modules/inventory/provider/supplier/pages/tabs/SupplierProductsPage');
export const SupplierProductsPage = lazy(loadSupplierProductsPage);
