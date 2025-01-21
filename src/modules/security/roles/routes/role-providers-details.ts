import { RouteConfig } from '@dfl/react-security';
import RoleHistoryChangeContainer from '../containers/RoleHistoryChangeContainer';
import RoleProviderUsersContainer from '../containers/RoleProviderUsersContainer';
import RoleProviderPermissionsContainer from '../containers/RoleProviderPermissionsContainer';

const roleProvidersDetailsRoutes: RouteConfig = {
  inventory: {
    path: '/permissions',
    component: RoleProviderPermissionsContainer,
  },
  general: {
    path: '/users',
    component: RoleProviderUsersContainer,
  },
  history_change: {
    path: '/history_change',
    component: RoleHistoryChangeContainer,
  },
};

export default roleProvidersDetailsRoutes;
