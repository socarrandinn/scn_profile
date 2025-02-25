import { RouteConfig } from '@dfl/react-security';
import { EXPRESS_DELIVERY_PERMISSIONS } from 'modules/sales/settings/express-delivery/constants/express-delivery.permissions';
import { ExpressDeliverySettings } from '../pages';

const routes: RouteConfig = {
  ExpressDeliveryList: {
    path: '/',
    permissions: EXPRESS_DELIVERY_PERMISSIONS.EXPRESS_DELIVERY_VIEW,
    component: ExpressDeliverySettings,
  },
};

export default routes;
