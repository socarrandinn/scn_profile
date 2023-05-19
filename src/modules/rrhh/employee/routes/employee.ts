import EmployeePersonal from 'modules/rrhh/employee/containers/EmployeePersonal';
import EmployeeWork from 'modules/rrhh/employee/containers/EmployeeWork';
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
    component: EmployeeWork,
  },
};

export default accountRoutes;
