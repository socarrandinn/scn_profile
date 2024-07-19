import { RouteConfig } from '@dfl/react-security';
import RoleHistoryChangeContainer from '../containers/RoleHistoryChangeContainer';
import RoleProviderUsersContainer from '../containers/RoleProviderUsersContainer';
import RoleProviderPermissionsContainer from '../containers/RoleProviderPermissionsContainer';

const roleProvidersDetailsRoutes: RouteConfig = {
  general: {
    path: '/users',
    component: RoleProviderUsersContainer,
  },
  inventory: {
    path: '/permissions',
    component: RoleProviderPermissionsContainer,
  },
  history_change: {
    path: '/history_change',
    component: RoleHistoryChangeContainer,
  },
};

export default roleProvidersDetailsRoutes;
