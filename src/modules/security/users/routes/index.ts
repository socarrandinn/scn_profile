import { UserList, UserDetails } from 'modules/security/users/pages';

const routes = {
  UserList: {
    path: '/*',
    component: UserList,
  },
  UserSystemDetail: {
    path: '/:id/*',
    component: UserDetails,
  },
};

export default routes;
