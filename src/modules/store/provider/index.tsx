import { RouteLoader } from '@dfl/react-security';
import ManufactureModule from 'modules/store/provider/manufacture';
import LogisticsModule from 'modules/store/provider/logistics';
import ProductsModule from 'modules/store/provider/products';

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
