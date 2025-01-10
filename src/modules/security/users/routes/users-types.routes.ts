import { RouteConfig, RouteConfigProps } from '@dfl/react-security';
import UserList from 'modules/security/users/pages/user-lists/UserSystemList';
import { USER_LIST_TYPES } from 'modules/security/users/constants/list-types.constant';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

const userTypesRoutes: RouteConfig = [
  {
    path: '/all',
    component: UserList,
    data: { status: USER_LIST_TYPES.ALL, type: SPACE_TYPE.ROOT },
  },
  {
    path: '/active',
    component: UserList,
    data: { status: USER_LIST_TYPES.ACTIVE, type: SPACE_TYPE.ROOT },
  },
  {
    path: '/unverify',
    component: UserList,
    data: { status: USER_LIST_TYPES.UNVERIFY, type: SPACE_TYPE.ROOT },
  },
  {
    path: '/lock',
    component: UserList,
    data: { status: USER_LIST_TYPES.LOCK, type: SPACE_TYPE.ROOT },
  },
  // invitation: {
  //   path: '/invitation',
  //   component: UserInvitationList,
  //   data: { status: USER_LIST_TYPES.INVITATION, type: SPACE_TYPE.ROOT },
  // },
];

export const mapRoutes = (userType: SPACE_TYPE, listComponent: any) => userTypesRoutes.map((route: RouteConfigProps) => {
  return {
    ...route,
    component: listComponent,
    data: {
      ...route.data,
      type: userType,
    },
  };
});

export default userTypesRoutes;
