import { UserTabList, UserDetails, UserProviderDetails } from 'modules/security/users/pages';

const routes = {
  UserList: {
    path: '/*',
    component: UserTabList,
  },
  UserSystemDetail: {
    path: '/system/:id/*',
    component: UserDetails,
  },
  UserProviderDetail: {
    path: '/providers/:id/*',
    component: UserProviderDetails,
  },
};

export default routes;
