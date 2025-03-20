import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/sales/settings';
import PaidOrderModule from 'modules/sales/paid-order';
import PreOrderModule from 'modules/sales/pre-order';
import SubOrderModule from './sub-orders';
import DispatchModule from 'modules/sales/dispatch';
import IncidenceModule from 'modules/sales/incidence';

const routes = {
  SalesSettings: {
    path: '/settings/*',
    component: SettingsModule,
  },
  PaidOrderList: {
    path: '/orders/*',
    component: PaidOrderModule,
  },
  PreOrderList: {
    path: '/pre-orders/*',
    component: PreOrderModule,
  },
  SubOrderList: {
    path: '/sub-orders/*',
    component: SubOrderModule,
  },
  DispatchList: {
    path: '/dispatches/*',
    component: DispatchModule,
  },
  IncidenceList: {
    path: '/incidences/*',
    component: IncidenceModule,
  },
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/orders'} memory />;
};

export default Module;
