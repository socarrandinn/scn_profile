import { RouteLoader } from '@dfl/react-security';
import JobPositionModule from 'modules/rrhh/settings/job-position';

const routes = {
  JobPositionList: {
    path: '/job-positions/*',
    component: JobPositionModule,
  },
};
const SettingsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/settings/job-positions'} memory />;
};

export default SettingsModule;
