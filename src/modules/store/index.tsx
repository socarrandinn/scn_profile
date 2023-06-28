import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/store/settings';

const routes = {
  JobPositionList: {
    path: '/settings/*',
    component: SettingsModule,
  },
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/store/settings'} memory />;
};

export default Module;
