import { RouteConfig } from '@dfl/react-security';
import PreOrderGeneralDetails from '../containers/tabs/PreOrderGeneralDetails';

const preOrderRouters: RouteConfig = {
  general: {
    path: '/general',
    component: PreOrderGeneralDetails,
  },
  activity: {
    path: '/activity',
    component: 'LogisticUsersPage',
  },
};

export default preOrderRouters;
