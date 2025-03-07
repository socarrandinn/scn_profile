import { RouteConfig } from '@dfl/react-security';
import PaidOrderGeneralDetails from '../containers/tabs/PaidOrderGeneralDetails';
import { OrderActivitiesInfo } from 'modules/sales/common/components/OrderDetails/OrderActivitiesInfo';

const paidOrderRouters: RouteConfig = {
  general: {
    path: '/general',
    component: PaidOrderGeneralDetails,
  },

  activity: {
    path: '/activity',
    component: OrderActivitiesInfo,
  },
  /* history_change: {
    path: '/history_change',
    component: LogisticHistoryChangePage,
  }, */
};

export default paidOrderRouters;
