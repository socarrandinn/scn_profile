import { RouteConfig, RouteLoader } from '@dfl/react-security';
import ClientsModule from 'modules/crm/clients';
import ReviewsModule from './reviews';
import CrmSettingsModule from './settings';

const routes: RouteConfig = {
  ClientsList: {
    path: '/clients/*',
    component: ClientsModule,
  },
  ReviewsList: {
    path: '/reviews/*',
    component: ReviewsModule,
  },

  SalesSettings: {
    path: '/settings/*',
    component: CrmSettingsModule,
  },
};

const CrmModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/crm/clients'} memory />;
};

export default CrmModule;
