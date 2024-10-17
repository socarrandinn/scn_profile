import { PaidOrderList, PaidOrderDetails } from 'modules/sales/paid-order/pages';
import { RouteConfig } from '@dfl/react-security';
import { PAID_ORDER_PERMISSIONS } from 'modules/sales/paid-order/constants/paid-order.permissions';

const routes: RouteConfig = {
  PaidOrderList: {
    path: '/',
    permissions: PAID_ORDER_PERMISSIONS.PAID_ORDER_VIEW,
    component: PaidOrderList,
  },
  PaidOrderDetails: {
    path: '/:id/*',
    permissions: PAID_ORDER_PERMISSIONS.PAID_ORDER_VIEW,
    component: PaidOrderDetails,
  },
};

export default routes;
