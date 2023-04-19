import { EntityApiService } from '@dfl/react-security';
import { IEmployee } from 'modules/rrhh/employee/interfaces';

class EmployeeService extends EntityApiService<IEmployee> {}

export default new EmployeeService('/ms-rrhh/api/employees');
