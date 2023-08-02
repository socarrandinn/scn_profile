import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/store/settings';
import StoreModule from 'modules/store/store';
import EmployeeModule from 'modules/store/product';

const routes = {
  JobPositionList: {
    path: '/settings/*',
    component: SettingsModule,
  },
  ProductsList: {
    path: '/products/*',
    component: EmployeeModule,
  },
  StoreList: {
    path: '/stores/*',
    component: StoreModule,
  }
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/store/settings'} memory/>;
};

export default Module;
