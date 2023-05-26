import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/rrhh/settings';
import EmployeeModule from 'modules/rrhh/employee';
import TeamModule from 'modules/rrhh/team';
import AdvertisementModule from 'modules/rrhh/advertisement';
import TimeOffRequestsModule from 'modules/rrhh/time-off';

const routes = {
  JobPositionList: {
    path: '/settings/*',
    component: SettingsModule,
  },
  EmployeeList: {
    path: '/employees/*',
    component: EmployeeModule,
  },
  TeamList: {
    path: '/teams/*',
    component: TeamModule,
  },
  AdvertisementList: {
    path: '/advertisements/*',
    component: AdvertisementModule,
  },
  TimeOffRequests: {
    path: '/time-off/*',
    component: TimeOffRequestsModule,
  },
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/settings/job-positions'} memory />;
};

export default Module;
