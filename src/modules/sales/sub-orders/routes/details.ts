import { RouteConfig } from '@dfl/react-security';
import PreOrderGeneralDetails from 'modules/sales/pre-order/containers/tabs/PreOrderGeneralDetails';

const subOrderRouters: RouteConfig = {
  general: {
    path: '/general',
    component: PreOrderGeneralDetails,
  },
  products: {
    path: '/products',
    component: 'LogisticProductsPage',
  },
  activity: {
    path: '/activity',
    component: 'LogisticUsersPage',
  },
};

export default subOrderRouters;
