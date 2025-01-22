import { UserProviderDetails, UserProvidersListPage } from 'modules/security/user-providers/pages';

const routes = {
  UserList: {
    path: '/*',
    component: UserProvidersListPage,
  },
  UserDetails: {
    path: 'user/:id/*',
    component: UserProviderDetails,
  },
};

export default routes;
