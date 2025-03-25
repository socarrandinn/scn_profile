import { RouteConfig } from '@dfl/react-security';
import { INCIDENCE_PERMISSIONS } from '../constants';
import IncidenceActivityContainer from '../containers/IncidenceActivityContainer';
import IncidenceGeneralContainer from '../containers/IncidenceGeneralContainer';

const incidenceDetailsRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: IncidenceGeneralContainer,
    permissions: [INCIDENCE_PERMISSIONS.INCIDENCE_VIEW],
  },
  history_change: {
    path: '/history_change',
    component: IncidenceActivityContainer,
    permissions: ['ADMIN'],
  },
};

export default incidenceDetailsRoutes;
