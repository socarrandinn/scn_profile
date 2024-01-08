import { IMenu } from '@dfl/mui-react-common';
import SecurityOutlinedIcon from '@mui/icons-material/Security';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentInd';
import SettingsOutlinedIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';
import HomeIcon from '@mui/icons-material/Home';
import EmptyIcon from '@mui/icons-material/Block';
import { STORE_PERMISSIONS } from 'modules/inventory/store/constants';
import MessageIcon from '@mui/icons-material/Message';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import Inventory2Icon from '@mui/icons-material/Inventory2';

export const MAIN_MENU: IMenu[] = [
  {
    title: 'main_menu.admin.section.general.title',
    items: [
      {
        title: 'main_menu.admin.section.general.home',
        path: '/',
        icon: <HomeIcon fontSize='small' />,
      },
      {
        title: 'main_menu.admin.section.general.emptyList',
        path: '/general/empty-list',
        icon: <EmptyIcon fontSize='small' />,
      },
    ],
  },
  {
    title: 'main_menu.admin.section.store.title',
    prefix: '/inventory',
    permissions: [STORE_PERMISSIONS.STORE_VIEW, PRODUCT_PERMISSIONS.PRODUCT_VIEW],
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.store.products',
        path: '/inventory/products',
        partialMatch: true,
        icon: <Inventory2Icon fontSize='small' />,
        permissions: [PRODUCT_PERMISSIONS.PRODUCT_VIEW],
      },
      {
        title: 'main_menu.admin.section.store.stores',
        path: '/inventory/stores',
        partialMatch: true,
        icon: <StoreIcon fontSize='small' />,
        permissions: [STORE_PERMISSIONS.STORE_VIEW],
      },
      {
        title: 'main_menu.admin.section.store.settings',
        path: '/inventory/settings',
        partialMatch: true,
        icon: <SettingsOutlinedIcon fontSize='small' />,
        permissions: [STORE_PERMISSIONS.STORE_VIEW],
      },
    ],
  },
  {
    title: 'main_menu.admin.section.clients.title',
    prefix: '/client',
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.clients.messages',
        path: '/client/messages',
        icon: <MessageIcon fontSize='small' />,
      },
    ],
  },
  {
    title: 'main_menu.admin.section.store.title',
    prefix: '/store',
    permissions: [STORE_PERMISSIONS.STORE_VIEW],
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.store.stores',
        path: '/store/stores',
        partialMatch: true,
        icon: <StoreIcon fontSize='small' />,
        permissions: [STORE_PERMISSIONS.STORE_VIEW],
      },
      {
        title: 'main_menu.admin.section.store.settings',
        path: '/store/settings',
        partialMatch: true,
        icon: <SettingsOutlinedIcon fontSize='small' />,
        permissions: [STORE_PERMISSIONS.STORE_VIEW],
      },
    ],
  },
  {
    title: 'main_menu.admin.section.security.title',
    permissions: ['ADMIN'],
    prefix: '/security',
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.security.users',
        path: '/security/users',
        icon: <AssignmentIndOutlinedIcon fontSize='small' />,
        permissions: ['ADMIN'],
      },
      {
        title: 'main_menu.admin.section.security.roles',
        path: '/security/roles',
        partialMatch: true,
        icon: <SecurityOutlinedIcon fontSize='small' />,
        permissions: ['ADMIN'],
      },
    ],
  },
  {
    title: 'main_menu.admin.section.order.title',
    permissions: ['ADMIN'],
    prefix: '/order',
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.order.status',
        path: '/order/status',
        icon: <AssignmentIndOutlinedIcon fontSize='small' />,
        permissions: ['ADMIN'],
      },
    ],
  },
];
