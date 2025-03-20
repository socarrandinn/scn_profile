import { SupplierList, Supplier } from 'modules/inventory/provider/supplier/pages';
import { RouteConfig } from '@dfl/react-security';
import { SUPPLIER_PERMISSIONS } from 'modules/inventory/provider/supplier/constants/supplier.permissions';
import SupplierCreate from '../pages/SupplierCreate';
import EditProviderProducts from 'modules/inventory/provider/supplier/pages/EditSupplier';

const routes: RouteConfig = {
  ProductsList: {
    path: '/',
    permissions: SUPPLIER_PERMISSIONS.SUPPLIER_VIEW,
    component: SupplierList,
  },
  CreateProviderProducts: {
    path: '/create',
    permissions: SUPPLIER_PERMISSIONS.SUPPLIER_WRITE,
    component: SupplierCreate,
  },
  DetailProviderProducts: {
    path: '/:id/*',
    permissions: SUPPLIER_PERMISSIONS.SUPPLIER_VIEW,
    component: Supplier,
  },
  EditProviderProducts: {
    path: '/:id/edit',
    permissions: SUPPLIER_PERMISSIONS.SUPPLIER_WRITE,
    component: EditProviderProducts,
  },
};

export default routes;
