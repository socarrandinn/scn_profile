import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IEmployee, IEmployeeCreate } from 'modules/rrhh/employee/interfaces';
import { RecommendedEnum } from 'modules/rrhh/employee/constants/recomended.enum';

class EmployeeService extends EntityApiService<IEmployee> {
  save = (params: IEmployeeCreate, config?: RequestConfig): Promise<IEmployee> => {
    params.jobInformation.dateActivated = params.hiring.date;
    const newEmployee: Omit<IEmployee, '_id' | 'email' | 'phone'> = {
      ...params,
      hiring: {
        ...params.hiring,
        recommended: params.hiring.recommended === RecommendedEnum.recommended
      },
      jobInformation: [params.jobInformation]
    }
    return this.handleResponse(ApiClientService.post(this.getPath(null), newEmployee, config));
  };
}

export default new EmployeeService('/ms-rrhh/api/employees');
