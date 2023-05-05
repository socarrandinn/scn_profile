import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IEmployeeCategory } from 'modules/rrhh/employee/interfaces';

class EmployeeCategoryService extends EntityApiService<IEmployeeCategory[]> {
  // @ts-ignore
  search = (employeeId: string, config?: RequestConfig): Promise<ICompensation[]> => {
    const path = this.getPath(`/${employeeId}/job-information/search`);
    return ApiClientService.post(path, config).then(({ data }) => {
      return data?.categoriesHistory || [];
    });
  };

  update = (employeeId?: string, params?: IEmployeeCategory) => {
    if (employeeId) {
      return this.handleResponse(ApiClientService.post(this.getPath(`/${employeeId}/categories`), params));
    }

    return Promise.reject(new Error('You must need a _id, lastPassword, password and confirm'));
  };
}

export default new EmployeeCategoryService('/ms-rrhh/api/employees');
