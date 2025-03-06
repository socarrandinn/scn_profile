import { RouteConfig } from '@dfl/react-security';
import PaidOrderGeneralDetails from '../containers/tabs/PaidOrderGeneralDetails';
import PaidOrderActivityDetails from '../containers/tabs/PaidOrderActivityDetails';

const paidOrderRouters: RouteConfig = {
  general: {
    path: '/general',
    component: PaidOrderGeneralDetails,
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
