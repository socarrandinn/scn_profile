import { EntityApiService } from '@dfl/react-security';
import { IJobPosition } from 'modules/rrhh/settings/job-position/interfaces';

class JobPositionService extends EntityApiService<IJobPosition> {}

export default new JobPositionService('http://localhost:8082/ms-rrhh/api/job-positions');
