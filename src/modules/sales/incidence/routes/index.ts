import { IncidenceList } from 'modules/sales/incidence/pages';
import { RouteConfig } from '@dfl/react-security';
import { INCIDENCE_PERMISSIONS } from 'modules/sales/incidence/constants/incidence.permissions';

const routes: RouteConfig = {
  IncidenceList: {
    path: '/',
    permissions: INCIDENCE_PERMISSIONS.INCIDENCE_VIEW,
    component: IncidenceList,
  },
};

export default routes;
