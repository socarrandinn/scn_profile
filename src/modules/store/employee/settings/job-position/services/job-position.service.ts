import { EntityApiService } from '@dfl/react-security';
import { IJobPosition } from 'modules/store/employee/settings/job-position/interfaces';

class JobPositionService extends EntityApiService<IJobPosition> {}

export default new JobPositionService('/ms-rrhh/api/job-positions');
