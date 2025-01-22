import { UserSystemDetails, UserSystemListPage } from 'modules/security/user-system/pages';

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
