import { RouteConfig } from '@dfl/react-security';
import ManufacturerPageDefault from '../pages/ManufacturerPageDefault';
import ManufacturerGeneralPage from '../pages/tags/ManufacturerGeneralPage';
import ManufacturerHistoryChangePage from '../pages/tags/ManufacturerHistoryChangePage';
import { ManufacturerProductList } from '../components/ManufacturerProductList';

const manufactureDetailRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: ManufacturerGeneralPage,
  },
  products: {
    path: '/products',
    component: ManufacturerProductList
  },
  sale_report: {
    path: '/sale_report',
    component: ManufacturerPageDefault,
    data: { tab: 'REPORTE DE VENTAS' },
  },
  history_change: {
    path: '/history_change',
    component: ManufacturerHistoryChangePage,
  },
};

export default manufactureDetailRoutes;
