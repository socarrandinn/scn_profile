import { AnalyticList } from 'modules/rrhh/analytic/pages';
import { RouteConfig } from '@dfl/react-security';
import { ANALYTIC_PERMISSIONS } from 'modules/rrhh/analytic/constants/analytic.permissions';

const routes: RouteConfig = {
  AnalyticList: {
    path: '/general',
    permissions: ANALYTIC_PERMISSIONS.RRHH,
    component: AnalyticList,
  },
};

export default routes;
