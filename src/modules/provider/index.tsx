import { RouteLoader } from '@dfl/react-security';
import ManufactureModule from 'modules/provider/manufacture';

const routes = {
  ManufactureList: {
    path: '/manufactures/*',
    component: ManufactureModule,
  }
};

const ProviderModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/provider/manufactures'} memory />;
};

export default ProviderModule;
