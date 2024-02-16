import { CausesIncidenceList } from 'modules/sales/settings/causes-incidence/pages';
import { RouteConfig } from '@dfl/react-security';
import { CAUSES_INCIDENCE_PERMISSIONS } from 'modules/sales/settings/causes-incidence/constants/causes-incidence.permissions';

const routes: RouteConfig = {
  CausesIncidenceList: {
    path: '/',
    permissions: CAUSES_INCIDENCE_PERMISSIONS.CAUSES_INCIDENCE_VIEW,
    component: CausesIncidenceList,
  },
};

export default routes;
