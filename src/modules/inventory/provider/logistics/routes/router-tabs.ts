import { RouteConfig } from '@dfl/react-security';
import LogisticsPageDefault from 'modules/inventory/provider/logistics/pages/LogisticsPageDefault';
import SupplierGeneralPage from 'modules/inventory/provider/logistics/pages/tabs/SupplierGeneralPage';
import LogisticInventoryContainer from 'modules/inventory/provider/logistics/containers/LogisticInventoryContainer';
import LogisticProductsPage from 'modules/inventory/provider/logistics/pages/tabs/LogisticProductsPage';
import LogisticHistoryChangePage from '../pages/tabs/LogisticHistoryChangePage';
import LogisticStoresContainer from 'modules/inventory/provider/logistics/containers/LogisticWarehousesContainer';
import LogisticDistributionCentersPage from '../pages/tabs/LogisticDistributionCentersPage';
import { LOGISTICS_PERMISSIONS } from '../constants';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { STOCK_PERMISSIONS } from 'modules/inventory/product-stock/constants/stock.permissions';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';
import { DISTRIBUTION_CENTER_PERMISSIONS } from 'modules/inventory/distribution-centers/constants';

const logisticRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: SupplierGeneralPage,
    permissions: [LOGISTICS_PERMISSIONS.LOGISTICS_VIEW],
  },
  products: {
    path: '/products',
    component: LogisticProductsPage,
    permissions: [PRODUCT_PERMISSIONS.PRODUCT_VIEW],
  },
  // users: {
  //   path: '/users/*',
  //   component: LogisticUserTabList,
  // },
  inventory: {
    path: '/inventory',
    component: LogisticInventoryContainer,
    permissions: [STOCK_PERMISSIONS.VIEW],
  },
  distributionCenters: {
    path: '/distribution-centers',
    component: LogisticDistributionCentersPage,
    permissions: [DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_VIEW],
  },
  warehouses: {
    path: '/warehouses',
    component: LogisticStoresContainer,
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
  },
  sale_report: {
    path: '/sale_report',
    component: LogisticsPageDefault,
    data: { tab: 'REPORTE DE VENTAS' },
  },
  conciliations: {
    path: '/conciliations',
    component: LogisticsPageDefault,
    data: { tab: 'CONCILIACIONES' },
  },
  history_change: {
    path: '/history_change',
    component: LogisticHistoryChangePage,
    permissions: ['ADMIN'],
  },
};

export default logisticRoutes;
