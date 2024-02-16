import { CauseCancellationList } from 'modules/sales/settings/cause-cancellation/pages';
import { RouteConfig } from '@dfl/react-security';
import { CAUSE_CANCELLATION_PERMISSIONS } from 'modules/sales/settings/cause-cancellation/constants/cause-cancellation.permissions';

const routes: RouteConfig = {
  CauseCancellationList: {
    path: '/',
    permissions: CAUSE_CANCELLATION_PERMISSIONS.CAUSE_CANCELLATION_VIEW,
    component: CauseCancellationList,
  },
};

export default routes;
