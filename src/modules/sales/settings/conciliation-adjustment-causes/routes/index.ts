import { ConciliationAdjustmentCausesList } from 'modules/sales/settings/conciliation-adjustment-causes/pages';
import { RouteConfig } from '@dfl/react-security';
import { CONCILIATION_ADJUSTMENT_CAUSES_PERMISSIONS } from 'modules/sales/settings/conciliation-adjustment-causes/constants/conciliation-adjustment-causes.permissions';

const routes: RouteConfig = {
  ConciliationAdjustmentCausesList: {
    path: '/',
    permissions: CONCILIATION_ADJUSTMENT_CAUSES_PERMISSIONS.CONCILIATION_ADJUSTMENT_CAUSES_VIEW,
    component: ConciliationAdjustmentCausesList,
  },
};

export default routes;
