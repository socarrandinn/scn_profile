import { UserDetails } from 'modules/security/users/pages';

const routes = {
  UserSystemDetail: {
    path: 'user/:id/*',
    component: UserDetails,
  },
};

export default routes;
