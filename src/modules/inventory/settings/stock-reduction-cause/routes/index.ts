import { StockReductionCauseList } from 'modules/inventory/settings/stock-reduction-cause/pages';
import { RouteConfig } from '@dfl/react-security';
import { STOCK_REDUCTION_CAUSE_PERMISSIONS } from 'modules/inventory/settings/stock-reduction-cause/constants/stock-reduction-cause.permissions';

const routes: RouteConfig = {
  StockReductionCauseList: {
    path: '/',
    permissions: STOCK_REDUCTION_CAUSE_PERMISSIONS.STOCK_REDUCTION_CAUSE_VIEW,
    component: StockReductionCauseList,
  },
};

export default routes;
