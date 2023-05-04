import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { ICompensation } from 'modules/rrhh/employee/interfaces';

class EmployeeCategoryService extends EntityApiService<ICompensation[]> {
  // @ts-ignore
  search = (employeeId: string, config?: RequestConfig): Promise<ICompensation[]> => {
    const path = this.getPath(`/${employeeId}/job-information/search`);
    return ApiClientService.post(path, config).then(({ data }) => {
      return data?.categoryHistory || [];
    });
  };
}

export default new EmployeeCategoryService('/ms-rrhh/api/employees');
