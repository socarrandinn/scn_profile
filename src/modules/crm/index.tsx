import { RouteConfig, RouteLoader } from '@dfl/react-security';
import ClientsModule from 'modules/crm/clients';
import ReviewsModule from './reviews';
import ReportCauseModule from 'modules/crm/report-cause';
import DisallowedWordModule from 'modules/crm/disallowed-word';
import ContentLoader from 'components/ContentLoader/ContentLoader';
import { Suspense } from 'react';

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
  },
  DisallowedWordList: {
    path: '/disallowed-words/*',
    component: DisallowedWordModule,
  },
};

const CrmModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/crm/clients'} memory />;
};

export default CrmModule;
