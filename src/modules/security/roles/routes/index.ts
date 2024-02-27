import { RoleDetails, RoleProviderDetails, RoleTabList } from 'modules/security/roles/pages';
// import RoleTabContianer from '../pages/RoleTabList';

const routes = {
  RoleTabs: {
    path: '/*',
    component: RoleTabList,
  },
  RoleDetails: {
    path: '/system/:id',
    component: RoleDetails,
  },
  RoleProviderDetails: {
    path: '/providers/:id',
    component: RoleProviderDetails,
  },
};

export default routes;
