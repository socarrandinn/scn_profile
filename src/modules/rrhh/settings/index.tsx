import { RouteLoader } from '@dfl/react-security';
import JobPositionModule from 'modules/rrhh/settings/job-position';
import ReasonForJobChangeModule from 'modules/rrhh/settings/reason-for-job-change';

const routes = {
  JobPosition: {
    path: '/job-positions/*',
    component: JobPositionModule,
  },
  ReasonForJobChange: {
    path: '/reason-for-job-change/*',
    component: ReasonForJobChangeModule,
  },
};

const SettingsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/settings/job-positions'} memory />;
};

export default SettingsModule;
