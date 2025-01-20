import { RouteConfig, RouteConfigProps } from '@dfl/react-security';
import { USER_LIST_TYPES } from 'modules/security/users/constants/list-types.constant';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import UserListInvitation from '../pages/UserListInvitation';

const userTypesRoutes: RouteConfig = [
  {
    path: '/all',
    data: { status: USER_LIST_TYPES.ALL },
  },
  {
    path: '/active',
    data: { status: USER_LIST_TYPES.ACTIVE },
  },
  {
    path: '/unverify',
    data: { status: USER_LIST_TYPES.UNVERIFY },
  },
  {
    path: '/lock',
    data: { status: USER_LIST_TYPES.LOCK },
  },
  {
    path: '/invitation',
    component: UserListInvitation,
    data: { status: USER_LIST_TYPES.INVITATION },
  },
];

export const mapRoutes = (userType: SPACE_TYPE, listComponent: any) =>
  userTypesRoutes?.map((route: RouteConfigProps) => {
    if (route?.data?.status === USER_LIST_TYPES.INVITATION) {
      return {
        ...route,
        data: {
          ...route?.data,
          type: userType,
        },
      };
    }
    return {
      ...route,
      component: listComponent,
      data: {
        ...route?.data,
        type: userType,
      },
    };
  });

export default userTypesRoutes;
