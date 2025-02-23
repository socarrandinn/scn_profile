import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/sales/settings';
import PaidOrderModule from 'modules/sales/paid-order';
import PreOrderModule from 'modules/sales/pre-order';
import SubOrderModule from './sub-orders';
import ConciliationModule from './conciliation';

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
  Conciliation: {
    path: '/conciliation/*',
    component: ConciliationModule,
  },
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/orders'} memory />;
};

export default Module;
