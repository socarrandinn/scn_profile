import { RouteConfig } from '@dfl/react-security';
import { UserSystemListPage } from 'modules/security/user-system/pages';
import { USER_LIST_TYPES } from 'modules/security/users/constants/list-types.constant';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

const userTypesRoutes: RouteConfig = {
  all: {
    path: '/all',
    component: UserSystemListPage,
    data: { status: USER_LIST_TYPES.ALL, type: SPACE_TYPE.ROOT },
  },
  active: {
    path: '/active',
    component: UserSystemListPage,
    data: { status: USER_LIST_TYPES.ACTIVE, type: SPACE_TYPE.ROOT },
  },
  unverify: {
    path: '/unverify',
    component: UserSystemListPage,
    data: { status: USER_LIST_TYPES.UNVERIFY, type: SPACE_TYPE.ROOT },
  },
  lock: {
    path: '/lock',
    component: UserSystemListPage,
    data: { status: USER_LIST_TYPES.UNVERIFY, type: SPACE_TYPE.ROOT },
  },
  // invitation: {
  //   path: '/invitation',
  //   component: UserInvitationList,
  //   data: { status: USER_LIST_TYPES.INVITATION, type: SPACE_TYPE.ROOT },
  // },
};
export default userTypesRoutes;
