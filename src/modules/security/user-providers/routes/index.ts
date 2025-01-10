import { UserProvidersListPage } from 'modules/security/user-providers/pages';

const routes = {
  UserList: {
    path: '/*',
    component: UserProvidersListPage,
  },
  // UserSystemDetail: {
  //   path: 'user/:id/*',
  //   component: UserDetails,
  // },
};

export default routes;
