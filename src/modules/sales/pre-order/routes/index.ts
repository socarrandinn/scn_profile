import { PreOrderDetails, PreOrderList } from 'modules/sales/pre-order/pages';
import { RouteConfig } from '@dfl/react-security';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';

const routes: RouteConfig = {
  PaidOrderList: {
    path: '/',
    permissions: ORDER_PERMISSIONS.ORDER_VIEW,
    component: PreOrderList,
  },
  PaidOrderDetails: {
    path: '/:id/*',
    permissions: ORDER_PERMISSIONS.ORDER_VIEW,
    component: PreOrderDetails,
  },
};

export default routes;
