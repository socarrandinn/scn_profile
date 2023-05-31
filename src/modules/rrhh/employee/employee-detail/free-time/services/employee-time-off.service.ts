import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IEmployeeTimeOff, IEmployeeTimeOffStat } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';

class EmployeeTimeOffService extends EntityApiService<IEmployeeTimeOffStat> {
  searchEmployeeAccommulatedTimeOff = (employeeId: string, params?: Record<string, any>, config?: RequestConfig): Promise<IEmployeeTimeOffStat[]> => {
    const path = this.getPath(`/time-off-for-employee/${employeeId}/search`);
    params = params || {}
    params.size = 20;
    return this.handleResponse(ApiClientService.post(path, params, config)).then(({ data }) => data);
  };

  requestTimeOff = (employeeId: string, params: IEmployeeTimeOff, config?: RequestConfig): Promise<any> => {
    const path = this.getPath('/time-off-consumption');
    params.employee = employeeId;
    return this.handleResponse(ApiClientService.post(path, params, config));
  };
}

export default new EmployeeTimeOffService('/ms-rrhh/api');
