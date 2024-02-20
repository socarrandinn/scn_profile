import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import { STORE_PICKUP_PERMISSIONS } from 'modules/sales/settings/store-pickup/constants';
import {
  CAUSES_INCIDENCE,
  CAUSES_CANCELLATION,
  ORDERS,
  STORE_PICKUP,
  HOME_DELIVERY,
  EXPRESS_DELIVERY,
} from 'modules/sales/constants/sales.entities.styles';
import { CAUSES_INCIDENCE_PERMISSIONS } from 'modules/sales/settings/causes-incidence/constants';
import { CAUSE_CANCELLATION_PERMISSIONS } from 'modules/sales/settings/cause-cancellation/constants';
import { HOME_DELIVERY_PERMISSIONS } from 'modules/sales/settings/home-delivery/constants';

export const orderManagementMenu: IMenuItemPage[] = [
  {
    title: 'orderStatus:list',
    description: 'orderStatus:description',
    path: '/sales/settings/order-status',
    icon: ORDERS.ICON,
    color: ORDERS.COLOR,
  },
  {
    title: 'causesIncidence:list',
    description: 'causesIncidence:description',
    path: '/sales/settings/causes-incidence',
    icon: CAUSES_INCIDENCE.ICON,
    color: CAUSES_INCIDENCE.COLOR,
    permissions: [CAUSES_INCIDENCE_PERMISSIONS.CAUSES_INCIDENCE_VIEW],
  },
  {
    title: 'causeCancellation:list',
    description: 'causeCancellation:description',
    path: '/sales/settings/cause-cancellation',
    icon: CAUSES_CANCELLATION.ICON,
    color: CAUSES_CANCELLATION.COLOR,
    permissions: [CAUSE_CANCELLATION_PERMISSIONS.CAUSE_CANCELLATION_VIEW],
  },
];

export const shippingSettingsMenu: IMenuItemPage[] = [
  {
    title: 'storePickup:list',
    description: 'storePickup:description',
    path: '/sales/settings/store-pickup',
    icon: STORE_PICKUP.ICON,
    color: STORE_PICKUP.COLOR,
    permissions: [STORE_PICKUP_PERMISSIONS.STORE_PICKUP_VIEW],
  },
  {
    title: 'homeDelivery:list',
    description: 'homeDelivery:description',
    path: '/sales/settings/home-deliveries',
    icon: HOME_DELIVERY.ICON,
    color: HOME_DELIVERY.COLOR,
    permissions: [HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_VIEW],
  },
  {
    title: 'expressDelivery:list',
    description: 'expressDelivery:description',
    path: '/sales/settings/express-delivery',
    icon: EXPRESS_DELIVERY.ICON,
    color: EXPRESS_DELIVERY.COLOR,
    permissions: [STORE_PICKUP_PERMISSIONS.STORE_PICKUP_VIEW],
  },
];
