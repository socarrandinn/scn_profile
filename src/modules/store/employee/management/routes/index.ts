import { CreateEmployee, EmployeeDetails, EmployeeList } from 'modules/store/employee/management/pages';
import { RouteConfig } from '@dfl/react-security';
import { EMPLOYEE_PERMISSIONS } from 'modules/store/employee/management/constants/employee.permissions';
import MyTeamDetails from '../pages/MyTeamDetails';

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
  MyEmployeeDetail: {
    path: '/me/*',
    component: EmployeeDetails,
  },
  EmployeeDetail: {
    path: '/:id/*',
    permissions: EMPLOYEE_PERMISSIONS.EMPLOYEE_VIEW,
    component: EmployeeDetails,
  },
  MyTeam: {
    path: '/team',
    component: MyTeamDetails
  }
};

export default routes;
