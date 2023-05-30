import { EntityApiService } from '@dfl/react-security';

class EmployeeAllergiesService extends EntityApiService<string> {}

export default new EmployeeAllergiesService('/ms-rrhh/api/allergies');
