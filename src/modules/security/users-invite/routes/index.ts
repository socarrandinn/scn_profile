import { ProviderTabList } from 'modules/security/users-invite/pages';
import { RouteConfig } from '@dfl/react-security';
import { USERS_INVITE_PERMISSIONS } from 'modules/security/users-invite/constants/users-invite.permissions';
import UserProviderDetails from 'modules/security/users/pages/UserProviderDetails';

const routes: RouteConfig = {
  UsersInviteList: {
    path: '/*',
    permissions: USERS_INVITE_PERMISSIONS.USERS_INVITE_VIEW,
    component: ProviderTabList,
  },

  UserProviderDetail: {
    path: '/users/:id/*',
    component: UserProviderDetails,
  },
};

export default routes;
