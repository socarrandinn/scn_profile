import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IEmployee, IEmployeeCreate } from 'modules/rrhh/employee/interfaces';
import { RecommendedEnum } from 'modules/rrhh/employee/constants/recomended.enum';
import { parseCI } from 'utils/parsing-ci';

class EmployeeService extends EntityApiService<IEmployee> {
  save = (params: IEmployeeCreate, config?: RequestConfig): Promise<IEmployee> => {
    params.jobInformation.dateActivated = params.hiring.date;
    const ciParsed = parseCI(params.general.ci);
    params.general.birthday = ciParsed.birthday;
    params.general.gender = ciParsed.gender;

    const newEmployee: Omit<IEmployee, '_id' | 'email' | 'phone'> = {
      ...params,
      hiring: {
        ...params.hiring,
        recommended: params.hiring.recommended === RecommendedEnum.recommended,
      },
      // @ts-ignore
      compensation: params.compensation,
      // @ts-ignore
      jobInformation: params.jobInformation,
    };
    return this.handleResponse(ApiClientService.post(this.getPath(null), newEmployee, config));
  };
}

export default new EmployeeService('/ms-rrhh/api/employees');
