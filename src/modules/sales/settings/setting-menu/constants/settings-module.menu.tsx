import IMenuItemPage from 'components/libs/SettingMenuContent/IMenuItemPage';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

export const orderSettingMenu: IMenuItemPage[] = [
  {
    title: 'orderStatus:list',
    description: 'orderStatus:description',
    path: '/sales/settings/order-status',
    icon: <AccountTreeIcon fontSize='small' />,
  },
];
