import { EntityApiService } from '@dfl/react-security';
import { IReasonForJobChange } from 'modules/store/employee/settings/reason-for-job-change/interfaces';

class ReasonForJobChangeService extends EntityApiService<IReasonForJobChange> {}

export default new ReasonForJobChangeService('/ms-rrhh/api/reason-for-job-changes');
