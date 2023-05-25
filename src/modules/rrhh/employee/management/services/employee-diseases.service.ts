import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';

class EmployeeDiseasesService extends EntityApiService<string> {}

export default new EmployeeDiseasesService('/ms-rrhh/api/diseases');
