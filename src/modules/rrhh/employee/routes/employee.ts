import EmployeeGeneral from 'modules/rrhh/employee/containers/EmployeeGeneral';
import EmployeeAddress from 'modules/rrhh/employee/containers/EmployeeAddress';
import EmployeeContacts from 'modules/rrhh/employee/containers/EmployeeContacts';
import { RouteConfig } from '@dfl/react-security';

const accountRoutes: RouteConfig = {
  general: {
    path: '/general',
    component: EmployeeGeneral,
  },
  address: {
    path: '/address',
    component: EmployeeAddress,
  },
  contacts: {
    path: '/contacts',
    component: EmployeeContacts,
  },
};

export default accountRoutes;
