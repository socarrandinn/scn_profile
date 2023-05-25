import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IEmployeeTimeOffStat } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';

class EmployeeTimeOffStatService extends EntityApiService<IEmployeeTimeOffStat[]> {
  // @ts-ignore
  search = (employeeId: string, params?: Record<string, any>, config?: RequestConfig) => {
    const path = this.getPath(`/${employeeId}/search`);
    return ApiClientService.post(path, params, config);
  };
}

export default new EmployeeTimeOffStatService('/ms-rrhh/api/time-off-for-employee');
