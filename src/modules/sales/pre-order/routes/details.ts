import { RouteConfig } from '@dfl/react-security';
import PreOrderGeneralDetails from '../containers/tabs/PreOrderGeneralDetails';

const preOrderRouters: RouteConfig = {
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

export default preOrderRouters;
