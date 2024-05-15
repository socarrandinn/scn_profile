import { RouteConfig, RouteLoader } from '@dfl/react-security';
import ClientsModule from 'modules/crm/clients';
import ReviewsModule from './reviews';

const routes: RouteConfig = {
  ClientsList: {
    path: '/clients/*',
    component: ClientsModule,
  },
  ReviewsList: {
    path: '/reviews/*',
    component: ReviewsModule,
  },
};

const CrmModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/crm/clients'} memory />;
};

export default CrmModule;
