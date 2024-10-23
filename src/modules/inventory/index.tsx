import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/inventory/settings';
import WarehouseModule from 'modules/inventory/warehouse';
import ProductModule from 'modules/inventory/product';
import StockReductionCauseModule from './settings/stock-reduction-cause';
import DistributionCentersModule from 'modules/inventory/distribution-centers';

const routes = {
  JobPositionList: {
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
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/products'} memory />;
};

export default Module;
