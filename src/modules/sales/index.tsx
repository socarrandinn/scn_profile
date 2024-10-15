import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/sales/settings';
import PaidOrderModule from 'modules/sales/paid-order';

const routes = {
  SalesSettings: {
    path: '/settings/*',
    component: SettingsModule,
  },
  PaidOrderList: {
    path: '/paid-orders/*',
    component: PaidOrderModule,
  },
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/settings'} memory />;
};

export default Module;
