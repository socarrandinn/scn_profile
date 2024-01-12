import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/orders/settings';

const routes = {
  OrderSettings: {
    path: '/settings/*',
    component: SettingsModule,
  },

};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/orders/settings'} memory />;
};

export default Module;
