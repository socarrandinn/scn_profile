import { RouteConfig } from '@dfl/react-security';
import LogisticUserListPage from '../pages/tabs/LogisticUserListPage';
import LogisticUserInviteList from '../pages/tabs/LogisticUserInviteList';

const logisticUserTabRoutes: RouteConfig = {
  users: {
    path: '/users',
    component: LogisticUserListPage,
  },
  usersInvite: {
    path: '/users-invite',
    component: LogisticUserInviteList
  },
};
export default logisticUserTabRoutes;
