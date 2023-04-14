import { UserDetails, UserList } from 'modules/security/users/pages';

const routes = {
  UserDetail: {
    path: '/:id/*',
    component: UserDetails,
  },
  UserList: {
    path: '/',
    component: UserList,
  },
};

export default routes;
