import { RouteConfig } from '@dfl/react-security';
import RoleHistoryChangeContainer from '../containers/RoleHistoryChangeContainer';
import RolePermissionsContainer from '../containers/RolePermissionsContainer';
import RoleUsersContainer from '../containers/RoleUsersContainer';

const roleDetailsRoutes: RouteConfig = {
  general: {
    path: '/users',
    component: RoleUsersContainer,
  },
  inventory: {
    path: '/permissions',
    component: RolePermissionsContainer,
  },
  history_change: {
    path: '/history_change',
    component: RoleHistoryChangeContainer,
  },
};

export default roleDetailsRoutes;
