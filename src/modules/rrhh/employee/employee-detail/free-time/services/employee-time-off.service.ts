import { ApiClientService, EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IEmployeeTimeOff, IEmployeeTimeOffStat } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';

class EmployeeTimeOffService extends EntityApiService<IEmployeeTimeOff> {
  searchEmployeeAccumulatedTimeOff = (employeeId: string, params?: Record<string, any>, config?: RequestConfig): Promise<IEmployeeTimeOffStat[]> => {
    const path = this.getPath(`/time-off-for-employee/${employeeId}/search`);
    params = params || {}
    params.size = 20;
    return this.handleResponse(ApiClientService.post(path, params, config)).then(({ data }) => data);
  };

  searchCurrent = (employeeId: string, params?: Record<string, any>, config?: RequestConfig): Promise<IEmployeeTimeOff[]> => {
    const path = this.getPath(`/time-off-consumption/${employeeId}/current/search`);
    params = params || {}
    params.size = 20;
    params.populate = true;
    return this.handleResponse(ApiClientService.post(path, params, config)).then(({ data }) => data);
  };

  searchHistory = (employeeId: string, params?: Record<string, any>, config?: RequestConfig): Promise<SearchResponseType<IEmployeeTimeOff>> => {
    const path = this.getPath(`/time-off-consumption/${employeeId}/history/search`);
    params = params || {}
    params.size = 20;
    params.populate = true;
    return this.handleSearchResponse(ApiClientService.post(path, params, config), params.size);
  };

  requestTimeOff = (employeeId: string, params: IEmployeeTimeOff, config?: RequestConfig): Promise<any> => {
    const path = this.getPath('/time-off-consumption');
    params.employee = employeeId;
    return this.handleResponse(ApiClientService.post(path, params, config));
  };
}

export default new EmployeeTimeOffService('/ms-rrhh/api');
