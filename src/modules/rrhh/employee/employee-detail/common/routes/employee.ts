import EmployeePersonal from 'modules/rrhh/employee/employee-detail/general/containers/EmployeePersonal';
import EmployeeWork from 'modules/rrhh/employee/employee-detail/job-information/containers/EmployeeWork';
import EmployeeFreeTime from 'modules/rrhh/employee/employee-detail/free-time/containers/EmployeeTimeOff';
import { RouteConfig } from '@dfl/react-security';

const accountRoutes: RouteConfig = {
  general: {
    path: '/personal',
    component: EmployeePersonal,
  },
  address: {
    path: '/work',
    component: EmployeeWork,
  },
  contacts: {
    path: '/free-time',
    component: EmployeeFreeTime,
  },
};

export default accountRoutes;
