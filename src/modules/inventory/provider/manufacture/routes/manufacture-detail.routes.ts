import { RouteConfig } from '@dfl/react-security';
import ManufacturerPageDefault from '../pages/ManufacturerPageDefault';
import ManufacturerGeneralPage from '../pages/tags/ManufacturerGeneralPage';
import ManufacturerHistoryChangePage from '../pages/tags/ManufacturerHistoryChangePage';
import { ManufacturerProductList } from '../components/ManufacturerProductList';
import { MANUFACTURE_PERMISSIONS } from '../constants';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';

const manufactureDetailRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: ManufacturerGeneralPage,
    permissions: [MANUFACTURE_PERMISSIONS.MANUFACTURE_VIEW],
  },
  products: {
    path: '/products',
    component: ManufacturerProductList,
    permissions: [PRODUCT_PERMISSIONS.PRODUCT_VIEW],
  },
  sale_report: {
    path: '/sale_report',
    component: ManufacturerPageDefault,
    data: { tab: 'REPORTE DE VENTAS' },
  },
  history_change: {
    path: '/history_change',
    component: ManufacturerHistoryChangePage,
    permissions: ['ADMIN'],
  },
};

export default manufactureDetailRoutes;
