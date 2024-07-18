import { RouteConfig } from '@dfl/react-security';
import RoleHistoryChangeContainer from '../containers/RoleHistoryChangeContainer';
import RolePermissionsContainer from '../containers/RolePermissionsContainer';
import RoleProviderUsersContainer from '../containers/RoleProviderUsersContainer';

const roleProvidersDetailsRoutes: RouteConfig = {
  general: {
    path: '/users',
    component: RoleProviderUsersContainer,
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

export default roleProvidersDetailsRoutes;
