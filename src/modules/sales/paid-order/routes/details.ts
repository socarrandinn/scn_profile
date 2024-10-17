import { RouteConfig } from '@dfl/react-security';
import PaidOrderGeneralDetails from '../containers/tabs/PaidOrderGeneralDetails';
import LogisticHistoryChangePage from 'modules/inventory/provider/logistics/pages/tabs/LogisticHistoryChangePage';

const paidOrderRouters: RouteConfig = {
  general: {
    path: '/general',
    component: PaidOrderGeneralDetails,
  },
  products: {
    path: '/products',
    component: 'LogisticProductsPage',
  },
  activity: {
    path: '/activity',
    component: 'LogisticUsersPage',
  },
  seo: {
    path: '/seo',
    component: 'LogisticInventoryContainer',
  },
  history_change: {
    path: '/history_change',
    component: LogisticHistoryChangePage,
  },
};

export default paidOrderRouters;
