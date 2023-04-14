import { RoleDetails, RoleList } from 'modules/security/roles/pages';

const routes = {
  RoleDetails: {
    path: '/:id',
    component: RoleDetails,
  },
  RoleList: {
    path: '/',
    component: RoleList,
  },
};

export default routes;
