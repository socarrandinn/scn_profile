import { UserDetails } from '../pages';

const routes = {
  UserDetails: {
    path: '/users/user/:id/*',
    component: UserDetails,
  },
};

export default routes;
