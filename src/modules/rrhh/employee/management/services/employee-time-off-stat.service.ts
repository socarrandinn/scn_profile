import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IEmployeeTimeOffStat } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';

class EmployeeTimeOffStatService extends EntityApiService<IEmployeeTimeOffStat> {
  // @ts-ignore
  search = (employeeId: string, params?: Record<string, any>, config?: RequestConfig): Promise<IEmployeeTimeOffStat[]> => {
    const path = this.getPath(`/${employeeId}/search`);
    params = params || {}
    params.size = 20;
    return this.handleResponse(ApiClientService.post(path, params, config)).then(({ data }) => data);
  };
}

export default new EmployeeTimeOffStatService('/ms-rrhh/api/time-off-for-employee');
