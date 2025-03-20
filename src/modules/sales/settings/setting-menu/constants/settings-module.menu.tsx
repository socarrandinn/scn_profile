import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import { CAUSES_INCIDENCE, ORDERS, HOME_DELIVERY } from 'modules/sales/constants/sales.entities.styles';
import { CAUSES_INCIDENCE_PERMISSIONS } from 'modules/sales/settings/causes-incidence/constants';
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
];

export const shippingSettingsMenu: IMenuItemPage[] = [
  {
    title: 'homeDelivery:list',
    description: 'homeDelivery:description',
    path: '/sales/settings/home-deliveries',
    icon: HOME_DELIVERY.ICON,
    color: HOME_DELIVERY.COLOR,
    permissions: [HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_VIEW],
  },
];
