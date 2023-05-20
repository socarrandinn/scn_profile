import { CreateEmployee, EmployeeDetails, EmployeeList } from 'modules/rrhh/employee/management/pages';
import { RouteConfig } from '@dfl/react-security';
import { EMPLOYEE_PERMISSIONS } from 'modules/rrhh/employee/management/constants/employee.permissions';

const routes: RouteConfig = {
  EmployeeList: {
    path: '/',
    permissions: EMPLOYEE_PERMISSIONS.EMPLOYEE_VIEW,
    component: EmployeeList,
  },
  CreateEmployee: {
    path: '/create',
    permissions: EMPLOYEE_PERMISSIONS.EMPLOYEE_WRITE,
    component: CreateEmployee,
  },
  EmployeeDetail: {
    path: '/:id/*',
    component: EmployeeDetails,
  },
};

export default routes;
