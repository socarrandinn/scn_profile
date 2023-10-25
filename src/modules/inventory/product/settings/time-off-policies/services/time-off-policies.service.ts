import { EntityApiService } from '@dfl/react-security';
import { ITimeOffPolicies } from 'modules/inventory/product/settings/time-off-policies/interfaces';

class TimeOffPoliciesService extends EntityApiService<ITimeOffPolicies> {}

export default new TimeOffPoliciesService('/ms-rrhh/api/time-off-policies');
