import { RoleDetails, RoleProviderDetails } from 'modules/security/roles/pages';
import RoleTabContianer from '../containers/RoleTabContainer';

const routes = {
  RoleTabs: {
    path: '/*',
    component: RoleTabContianer,
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
