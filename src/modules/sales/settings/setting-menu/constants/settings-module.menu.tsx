import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import { ORDERS } from 'modules/sales/constants/sales.entities.styles';

export const orderSettingMenu: IMenuItemPage[] = [
  {
    title: 'orderStatus:list',
    description: 'orderStatus:description',
    path: '/sales/settings/order-status',
    icon: ORDERS.ICON,
    color: ORDERS.COLOR,
  },
];
