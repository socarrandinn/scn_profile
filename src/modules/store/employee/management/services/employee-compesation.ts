import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { ICompensation } from 'modules/store/employee/common/interfaces';

class EmployeeCompensationService extends EntityApiService<ICompensation[]> {
  // @ts-ignore
  search = (employeeId: string, config?: RequestConfig): Promise<ICompensation[]> => {
    const path = this.getPath(`/${employeeId}/job-information/search`);
    return ApiClientService.post(path, config).then(({ data }) => {
      return data?.compensationHistory || [];
    });
  };

  update = (employeeId?: string, params?: ICompensation) => {
    if (employeeId) {
      return this.handleResponse(ApiClientService.post(this.getPath(`/${employeeId}/compensations`), params));
    }

    return Promise.reject(new Error('You must need a _id, lastPassword, password and confirm'));
  };
}

export default new EmployeeCompensationService('/ms-rrhh/api/employees');
