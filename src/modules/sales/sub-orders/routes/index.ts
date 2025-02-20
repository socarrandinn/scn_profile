import { RouteConfig } from '@dfl/react-security';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import SubOrderList from 'modules/sales/sub-orders/pages/SubOrderList';
import SubOrderDetails from '../pages/SubOrderDetails';

const routes: RouteConfig = {
  SubOrderList: {
    path: '/',
    permissions: ORDER_PERMISSIONS.ORDER_VIEW,
    component: SubOrderList,
  },
  SubOrderDetails: {
    path: '/:id/*',
    permissions: ORDER_PERMISSIONS.ORDER_VIEW,
    component: SubOrderDetails,
  },
};

export default routes;
