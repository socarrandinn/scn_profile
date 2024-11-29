import { RouteConfig } from '@dfl/react-security';
import UserList from 'modules/security/users/pages/user-lists/UserList';
import { USER_LIST_TYPES } from 'modules/security/users/constants/list-types.constant';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

const userTypesRoutes: RouteConfig = {
  all: {
    path: '/all',
    component: UserList,
    data: { status: USER_LIST_TYPES.ALL, type: SPACE_TYPE.ROOT },
  },
  active: {
    path: '/active',
    component: UserList,
    data: { status: USER_LIST_TYPES.ACTIVE, type: SPACE_TYPE.ROOT },
  },
  unverify: {
    path: '/unverify',
    component: UserList,
    data: { status: USER_LIST_TYPES.UNVERIFY, type: SPACE_TYPE.ROOT },
  },
  lock: {
    path: '/lock',
    component: UserList,
    data: { status: USER_LIST_TYPES.UNVERIFY, type: SPACE_TYPE.ROOT },
  },
  invitation: {
    path: '/invitation',
    component: UserList,
    data: { status: USER_LIST_TYPES.INVITATION, type: SPACE_TYPE.ROOT },
  },
};
export default userTypesRoutes;
