import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

type MenuDivider = {
  divider: boolean;
  permission?: string[];
};

export type MenuItemType = {
  divider?: boolean;
  external?: boolean;
  label: string;
  link: string;
  icon: any;
  permission?: string[];
};

type MenuType = MenuDivider | MenuItemType;

export const ACCOUNT_MENU: MenuType[] = [
  {
    label: 'profile',
    link: '/account/general',
    icon: AccountCircleOutlinedIcon,
  },
  {
    label: 'security',
    link: '/account/security',
    icon: GppGoodOutlinedIcon,
  },
  // {
  //   label: 'billing',
  //   link: '/account/billing',
  //   icon: CreditCardIcon,
  //   // permission: ['BILLING']
  // },
  // {
  //   label: 'notification',
  //   link: '/account/notification',
  //   icon: CreditCardIcon,
  //   // permission: ['BILLING']
  // },
  // {
  //   label: 'settings',
  //   link: '/account/settings',
  //   icon: SettingsIcon
  // }
];
