import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/rrhh/settings';

const routes = {
  JobPositionList: {
    path: '/settings/*',
    component: SettingsModule,
  },
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/settings/job-positions'} memory />;
};

export default Module;
