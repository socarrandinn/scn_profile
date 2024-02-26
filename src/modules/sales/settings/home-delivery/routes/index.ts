import { HomeDeliveryList } from 'modules/sales/settings/home-delivery/pages';
import { RouteConfig } from '@dfl/react-security';
import { HOME_DELIVERY_PERMISSIONS } from 'modules/sales/settings/home-delivery/constants/home-delivery.permissions';

const routes: RouteConfig = {
  HomeDeliveryList: {
    path: '/',
    permissions: HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_VIEW,
    component: HomeDeliveryList,
  },
};

export default routes;
