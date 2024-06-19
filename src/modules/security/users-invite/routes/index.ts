import { UsersInviteList } from 'modules/security/users-invite/pages';
import { RouteConfig } from '@dfl/react-security';
import { USERS_INVITE_PERMISSIONS } from 'modules/security/users-invite/constants/users-invite.permissions';

const routes: RouteConfig = {
  UsersInviteList: {
    path: '/',
    permissions: USERS_INVITE_PERMISSIONS.USERS_INVITE_VIEW,
    component: UsersInviteList,
  },
};

export default routes;
