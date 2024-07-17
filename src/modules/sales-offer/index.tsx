import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/sales-offer/settings';

const routes = {
  SalesSettings: {
    path: '/settings/*',
    component: SettingsModule,
  },
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/offers/settings'} memory />;
};

export default Module;
