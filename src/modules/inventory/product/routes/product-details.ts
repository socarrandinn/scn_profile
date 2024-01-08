import { RouteConfig } from '@dfl/react-security';
import SupplierGeneralPage from 'modules/inventory/provider/supplier/pages/tabs/SupplierGeneralPage';

const productDetailsRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: SupplierGeneralPage,
    data: { tab: 'GENERAL' },
  },
  address: {
    path: '/work',
    component: SupplierGeneralPage,
    data: { tab: 'TRABAJO' },
  },
  contacts: {
    path: '/free_time',
    component: SupplierGeneralPage,
    data: { tab: 'TIEMPO LIBRE' },
  },
};

export default productDetailsRoutes;
