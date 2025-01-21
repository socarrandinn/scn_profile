import { RouteConfig } from '@dfl/react-security';
import RoleHistoryChangeContainer from '../containers/RoleHistoryChangeContainer';
import RolePermissionsContainer from '../containers/RolePermissionsContainer';
import RoleUsersContainer from '../containers/RoleUsersContainer';

const roleDetailsRoutes: RouteConfig = {
  inventory: {
    path: '/permissions',
    component: RolePermissionsContainer,
  },
  users: {
    path: '/users',
    component: RoleUsersContainer,
  },
  history_change: {
    path: '/history_change',
    component: RoleHistoryChangeContainer,
  },
};

export default roleDetailsRoutes;
