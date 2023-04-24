import EmployeeGeneral from 'modules/rrhh/employee/containers/EmployeeGeneral';
import { RouteConfig } from '@dfl/react-security';

const accountRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: EmployeeGeneral,
  },
};

export default accountRoutes;
