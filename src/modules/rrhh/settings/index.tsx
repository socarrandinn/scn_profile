import { RouteLoader } from '@dfl/react-security';
import JobPositionModule from 'modules/rrhh/settings/job-position';
import ReasonForJobChangeModule from 'modules/rrhh/settings/reason-for-job-change';
import { RRHHSettingMenuPage } from 'modules/rrhh/settings/setting-menu';

const routes = {
  JobPosition: {
    path: '/job-positions/*',
    component: JobPositionModule,
  },
  ReasonForJobChange: {
    path: '/reason-for-job-change/*',
    component: ReasonForJobChangeModule,
  },
  settings: {
    path: '/',
    component: RRHHSettingMenuPage,
  },
};

const SettingsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/settings'} memory/>;
};

export default SettingsModule;
