import { RouteLoader } from '@dfl/react-security';
import JobPositionModule from 'modules/rrhh/settings/job-position';
import ReasonForJobChangeModule from 'modules/rrhh/settings/reason-for-job-change';
import ReasonForCompensationChangeModule from 'modules/rrhh/settings/reason-for-compensation-change';
import { RRHHSettingMenuPage } from 'modules/rrhh/settings/setting-menu';
import WorkLocationModule from 'modules/rrhh/settings/work-location';

const routes = {
  JobPosition: {
    path: '/job-positions/*',
    component: JobPositionModule,
  },
  ReasonForJobChange: {
    path: '/reason-for-job-change/*',
    component: ReasonForJobChangeModule,
  },
  ReasonForCompensationChange: {
    path: '/reason-for-compensation-change/*',
    component: ReasonForCompensationChangeModule,
  },
  WorkLocationModule: {
    path: '/work-locations/*',
    component: WorkLocationModule,
  },
  settings: {
    path: '/',
    component: RRHHSettingMenuPage,
  },
};

const SettingsModule = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/settings'} memory />;
};

export default SettingsModule;
