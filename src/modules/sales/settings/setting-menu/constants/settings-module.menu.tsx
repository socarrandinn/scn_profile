import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import { STORE_PICKUP_PERMISSIONS } from '../../store-pickup/constants';
import { CAUSES_CANCELLATION, ORDERS, STORE_PICKUP } from 'modules/sales/constants/sales.entities.styles';
import { CAUSE_CANCELLATION_PERMISSIONS } from 'modules/sales/settings/cause-cancellation/constants';

export const orderSettingMenu: IMenuItemPage[] = [
  {
    title: 'orderStatus:list',
    description: 'orderStatus:description',
    path: '/sales/settings/order-status',
    icon: ORDERS.ICON,
    color: ORDERS.COLOR,
  },
  {
    title: 'storePickup:list',
    description: 'storePickup:description',
    path: '/sales/settings/store-pickup',
    icon: STORE_PICKUP.ICON,
    color: STORE_PICKUP.COLOR,
    permissions: [STORE_PICKUP_PERMISSIONS.STORE_PICKUP_VIEW],
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
