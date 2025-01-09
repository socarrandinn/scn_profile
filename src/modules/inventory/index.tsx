import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/inventory/settings';
import WarehouseModule from 'modules/inventory/warehouse';
import ProductModule from 'modules/inventory/product';
import StockReductionCauseModule from './settings/stock-reduction-cause';
import DistributionCentersModule from 'modules/inventory/distribution-centers';
import { ReportInventoryPage } from 'modules/dashboard/pages';

const routes = {
  InventorySettings: {
    path: '/settings/*',
    component: SettingsModule,
  },
  ProductsList: {
    path: '/products/*',
    component: ProductModule,
  },
  StoreList: {
    path: '/warehouses/*',
    component: WarehouseModule,
  },
  StockReductionCauseList: {
    path: '/stock-reduction-causes/*',
    component: StockReductionCauseModule,
  },
  DistributionCentersList: {
    path: '/distribution-centers/*',
    component: DistributionCentersModule,
  },
  InventoryReport: {
    path: '/reports/*',
    component: ReportInventoryPage,
  },
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/products'} memory />;
};

export default Module;
