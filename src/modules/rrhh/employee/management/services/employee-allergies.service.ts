import {
  EmployeeDiseasesServiceClass
} from 'modules/rrhh/employee/management/services/employee-diseases.service';

class EmployeeAllergiesService extends EmployeeDiseasesServiceClass {
}

export default new EmployeeAllergiesService('/ms-rrhh/api/employees/allergies');
