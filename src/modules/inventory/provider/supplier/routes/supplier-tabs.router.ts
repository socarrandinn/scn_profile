import { RouteConfig } from '@dfl/react-security';
import SupplierProductPage from 'modules/inventory/provider/supplier/pages/tabs/SupplierProductPage';
import SupplierInventoryContainer from 'modules/inventory/provider/supplier/containers/SupplierInventoryContainer';
import SupplierProductsPage from 'modules/inventory/provider/supplier/pages/tabs/SupplierProductsPage';
import SupplierGeneralPage from '../pages/tabs/SupplierGeneralPage';
import SupplierReportSalePage from '../pages/tabs/SupplierReportSalePage';

const SupplierRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: SupplierGeneralPage,
  },
  products: {
    path: '/products',
    component: SupplierProductsPage,
  },
  inventory: {
    path: '/inventory',
    component: SupplierInventoryContainer,
  },
  sale_report: {
    path: '/sale_report',
    component: SupplierReportSalePage,
    data: { tab: 'REPORTE DE VENTAS' },
  },
  conciliations: {
    path: '/conciliations',
    component: SupplierProductPage,
    data: { tab: 'CONCILIACIONES' },
  },
  history_change: {
    path: '/history_change',
    component: SupplierProductPage,
    data: { tab: 'HISTORIAL DE CAMBIOS' },
  },
  settings: {
    path: '/settings',
    component: SupplierProductPage,
    data: { tab: 'CONFIGURACION' },
  },
};

export default SupplierRoutes;
