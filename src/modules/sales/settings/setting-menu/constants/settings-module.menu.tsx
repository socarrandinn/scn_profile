import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import DomainIcon from '@mui/icons-material/Domain';
import { STORE_PICKUP_PERMISSIONS } from '../../store-pickup/constants';

export const orderSettingMenu: IMenuItemPage[] = [
  {
    title: 'orderStatus:list',
    description: 'orderStatus:description',
    path: '/sales/settings/order-status',
    icon: <AccountTreeIcon fontSize='small' />,
  },
  {
    title: 'storePickup:list',
    description: 'storePickup:description',
    path: '/sales/settings/store-pickup',
    icon: <DomainIcon fontSize='small'/>,
    permissions: [STORE_PICKUP_PERMISSIONS.STORE_PICKUP_VIEW],
  },
];
