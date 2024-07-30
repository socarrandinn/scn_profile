import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/sales/settings';

const routes = {
  SalesSettings: {
    path: '/settings/*',
    component: SettingsModule,
  },
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/sales/settings'} memory />;
};

export default Module;
