import { PaidOrderList, PaidOrderDetails } from 'modules/sales/paid-order/pages';
import { RouteConfig } from '@dfl/react-security';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';

const routes: RouteConfig = {
  PaidOrderList: {
    path: '/',
    permissions: ORDER_PERMISSIONS.ORDER_VIEW,
    component: PaidOrderList,
  },
  PaidOrderDetails: {
    path: '/:id/*',
    permissions: ORDER_PERMISSIONS.ORDER_VIEW,
    component: PaidOrderDetails,
  },
};

export default routes;
