import { RouteLoader } from '@dfl/react-security';
import ManufactureModule from 'modules/inventory/provider/manufacture';
import LogisticsModule from 'modules/inventory/provider/logistics';
import ProductsModule from 'modules/inventory/provider/products';

const routes = {
  ManufactureList: {
    path: '/manufactures/*',
    component: ManufactureModule,
  },
  LogisticsList: {
    path: '/logistics/*',
    component: LogisticsModule,
  },
  ProductsList: {
    path: '/products/*',
    component: ProductsModule,
  },
};

const ProviderModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/provider/manufactures'} memory />;
};

export default ProviderModule;
