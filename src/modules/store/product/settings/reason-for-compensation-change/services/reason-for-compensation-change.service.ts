import { EntityApiService } from '@dfl/react-security';
import { IReasonForCompensationChange } from 'modules/store/product/settings/reason-for-compensation-change/interfaces';

class ReasonForCompensationChangeService extends EntityApiService<IReasonForCompensationChange> {}

export default new ReasonForCompensationChangeService('/ms-rrhh/api/reason-for-compensation-changes');
