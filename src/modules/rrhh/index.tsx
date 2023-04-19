import { RouteLoader } from '@dfl/react-security';
import SettingsModule from 'modules/rrhh/settings';
import EmployeeModule from "modules/rrhh/employee";

const routes = {
  JobPositionList: {
    path: '/settings/*',
    component: SettingsModule,
  },
  EmployeeList: {
    path: '/employees/*',
    component: EmployeeModule,
  },
};
const Module = () => {
  return <RouteLoader routes={routes} notfoundRedirect={'/rrhh/settings/job-positions'} memory />;
};

export default Module;
