import { EntityApiService } from '@dfl/react-security';
import { ITimeOffPolicyType } from 'modules/store/product/settings/time-off-policies/interfaces';

class TimeOffTypesService extends EntityApiService<ITimeOffPolicyType> {}

export default new TimeOffTypesService('/ms-rrhh/api/time-off-types');
