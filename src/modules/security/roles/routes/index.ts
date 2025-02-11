import { RoleDetails, RoleProviderDetails, RolePublicDetails, RoleTabList } from 'modules/security/roles/pages';

const routes = {
  RoleTabs: {
    path: '/*',
    component: RoleTabList,
  },
  RoleDetails: {
    path: '/system/:id/*',
    component: RoleDetails,
  },
  RoleProviderDetails: {
    path: '/providers/:id/*',
    component: RoleProviderDetails,
  },
  RolePublicDetails: {
    path: '/public/:id/*',
    component: RolePublicDetails,
  },
};

export default routes;
