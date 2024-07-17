import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/sales-offer/settings';
import OfferModule from 'modules/sales-offer/offer';

const routes = {
  SalesSettings: {
    path: '/settings/*',
    component: SettingsModule,
  },
    OfferList: {
              path: '/offers/*',
              component: OfferModule,
            }
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/offers/settings'} memory />;
};

export default Module;
