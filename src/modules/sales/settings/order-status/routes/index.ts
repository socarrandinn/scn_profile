import { OrderStatusList } from 'modules/sales/settings/order-status/pages';
import { RouteConfig } from '@dfl/react-security';
import { ORDER_STATUS_PERMISSIONS } from 'modules/sales/settings/order-status/constants/order-status.permissions';

const routes: RouteConfig = {
  OrderStatusList: {
    path: '/',
    permissions: ORDER_STATUS_PERMISSIONS.ORDER_STATUS_VIEW,
    component: OrderStatusList,
  },
};

export default routes;
