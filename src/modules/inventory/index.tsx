import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/inventory/settings';
import StoreModule from 'modules/inventory/store';
import ProductModule from 'modules/inventory/product';

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
    path: '/stores/*',
    component: StoreModule,
  },
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/inventory/products'} memory />;
};

export default Module;
