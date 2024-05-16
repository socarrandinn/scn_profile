import { RouteConfig, RouteLoader } from '@dfl/react-security';
import ClientsModule from 'modules/crm/clients';
import ReviewsModule from './reviews';
import ReportCauseModule from 'modules/crm/report-cause';

const routes: RouteConfig = {
  ClientsList: {
    path: '/clients/*',
    component: ClientsModule,
  },
  ReviewsList: {
    path: '/reviews/*',
    component: ReviewsModule,
  },
    ReportCauseList: {
              path: '/report-causes/*',
              component: ReportCauseModule,
            }
};

const CrmModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/crm/clients'} memory />;
};

export default CrmModule;
