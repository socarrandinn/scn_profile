import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/inventory/settings';
import WarehouseModule from 'modules/inventory/warehouse';
import ProductModule from 'modules/inventory/product';
import StockReductionCauseModule from './settings/stock-reduction-cause';

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
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/products'} memory />;
};

export default Module;
