import { ExpressDeliveryList } from 'modules/sales/settings/express-delivery/pages';
import { RouteConfig } from '@dfl/react-security';
import { EXPRESS_DELIVERY_PERMISSIONS } from 'modules/sales/settings/express-delivery/constants/express-delivery.permissions';

const routes: RouteConfig = {
  ExpressDeliveryList: {
    path: '/',
    permissions: EXPRESS_DELIVERY_PERMISSIONS.EXPRESS_DELIVERY_VIEW,
    component: ExpressDeliveryList,
  },
};

export default routes;
