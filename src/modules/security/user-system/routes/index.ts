import { UserSystemListPage } from 'modules/security/user-system/pages';
import UserSystemDetails from '../pages/UserSystemDetails';

const routes = {
  UserList: {
    path: '/*',
    component: UserSystemListPage,
  },
  UserDetails: {
    path: 'user/:id/*',
    component: UserSystemDetails,
  },
};

export default routes;
