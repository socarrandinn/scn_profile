import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { JobInformation } from 'modules/rrhh/employee/interfaces';

class EmployeeJobInformationService extends EntityApiService<JobInformation[]> {
  // @ts-ignore
  search = (employeeId: string, config?: RequestConfig): Promise<JobInformation[]> => {
    const path = this.getPath(`/${employeeId}/job-information/search`);
    return ApiClientService.post(path, config).then(({ data }) => {
      return data?.jobInformationHistory || [];
    });
  };

  update = (employeeId?: string, params?: JobInformation) => {
    if (employeeId) {
      return this.handleResponse(ApiClientService.post(this.getPath(`/${employeeId}/job-information`), params));
    }

    return Promise.reject(new Error('You must need a _id, lastPassword, password and confirm'));
  };
}

export default new EmployeeJobInformationService('/ms-rrhh/api/employees');
