import { RoleDetails, RoleList } from 'modules/security/roles/pages';
import RoleTabContianer from '../containers/RoleTabContainer';

const routes = {
  RoleTabs: {
    path: '/*',
    component: RoleTabContianer,
  },  
  RoleDetails: {
    path: '/users/:id',
    component: RoleDetails,
  },
};

export default routes;
