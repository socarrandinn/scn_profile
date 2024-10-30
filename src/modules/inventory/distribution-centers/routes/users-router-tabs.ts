import { RouteConfig } from '@dfl/react-security';
import DistributionCenterUserListPage from '../pages/tabs/DistributionCenterUserListPage';
import DistributionCenterUserInviteList from '../pages/tabs/DistributionCenterUserInviteList';

const distributionCenterUserTabRoutes: RouteConfig = {
  users: {
    path: '/users',
    component: DistributionCenterUserListPage,
  },
  usersInvite: {
    path: '/users-invite',
    component: DistributionCenterUserInviteList,
  },
};
export default distributionCenterUserTabRoutes;
