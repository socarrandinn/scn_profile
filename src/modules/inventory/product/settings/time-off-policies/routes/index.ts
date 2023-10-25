import { TimeOffPoliciesList } from 'modules/inventory/product/settings/time-off-policies/pages';
import { RouteConfig } from '@dfl/react-security';
import { TIME_OFF_POLICES_PERMISSIONS } from 'modules/inventory/product/settings/time-off-policies/constants/time-off-polices.permissions';

const routes: RouteConfig = {
  TimeOffPoliciesList: {
    path: '/',
    permissions: TIME_OFF_POLICES_PERMISSIONS.TIME_OFF_POLICY_VIEW,
    component: TimeOffPoliciesList,
  },
};

export default routes;
