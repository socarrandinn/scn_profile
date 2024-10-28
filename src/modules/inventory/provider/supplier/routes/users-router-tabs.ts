import { RouteConfig } from '@dfl/react-security';
import { SupplierUserInviteList, SupplierUsersPage } from '../pages/tabs';

const supplierUserTabRoutes: RouteConfig = {
  users: {
    path: '/users',
    component: SupplierUsersPage,
  },
  usersInvite: {
    path: '/users-invite',
    component: SupplierUserInviteList,
  },
};
export default supplierUserTabRoutes;
