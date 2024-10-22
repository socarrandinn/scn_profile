import { RouteConfig } from '@dfl/react-security';
import PaidOrderGeneralDetails from '../containers/tabs/PaidOrderGeneralDetails';
import PaidOrderActivityDetails from '../containers/tabs/PaidOrderActivityDetails';
import PaidOrderProductDetails from '../containers/tabs/PaidOrderProductDetails';

const paidOrderRouters: RouteConfig = {
  general: {
    path: '/general',
    component: PaidOrderGeneralDetails,
  },
  products: {
    path: '/products',
    component: PaidOrderProductDetails,
  },
  activity: {
    path: '/activity',
    component: PaidOrderActivityDetails,
  },
  /* history_change: {
    path: '/history_change',
    component: LogisticHistoryChangePage,
  }, */
};

export default paidOrderRouters;
