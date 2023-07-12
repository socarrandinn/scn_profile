import EmployeePersonal from 'modules/store/employee/employee-detail/general/containers/EmployeePersonal';
import EmployeeWork from 'modules/store/employee/employee-detail/job-information/containers/EmployeeWork';
import EmployeeFreeTime from 'modules/store/employee/employee-detail/free-time/containers/EmployeeTimeOff';
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
