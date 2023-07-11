import { RouteLoader } from '@dfl/react-security';
import ManufactureModule from 'modules/provider/manufacture';
import LogisticsModule from 'modules/provider/logistics';

const routes = {
  ManufactureList: {
    path: '/manufactures/*',
    component: ManufactureModule,
  },
  LogisticsList: {
    path: '/logistics/*',
    component: LogisticsModule,
  }
};

const ProviderModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/provider'} memory />;
};

export default ProviderModule;
