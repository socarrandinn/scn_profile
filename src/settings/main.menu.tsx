import { IMenu } from '@dfl/mui-react-common';
import SecurityOutlinedIcon from '@mui/icons-material/Security';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentInd';
import SettingsOutlinedIcon from '@mui/icons-material/Settings';
import StoreIcon from '@mui/icons-material/Store';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { STORE_PERMISSIONS } from 'modules/inventory/store/constants';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import PaidIcon from '@mui/icons-material/Paid';
import GroupIcon from '@mui/icons-material/Group';
import OfferOrderIcon from 'components/libs/Icons/OfferOrderIcon';
import { RateReview, Report, TravelExplore } from '@mui/icons-material';
// import MessageIcon from '@mui/icons-material/Message';
// import HowToRegIcon from '@mui/icons-material/HowToReg';

export const MAIN_MENU: IMenu[] = [
  {
    title: 'main_menu.admin.section.general.title',
    items: [
      {
        title: 'main_menu.admin.section.general.home',
        path: '/',
        icon: <HomeIcon fontSize='small' />,
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
    title: 'main_menu.admin.section.sales.title',
    prefix: '/sales',
    permissions: [STORE_PERMISSIONS.STORE_VIEW],
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.sales.orders',
        path: '/sales/sales',
        partialMatch: true,
        icon: <LocalMallIcon fontSize='small' />,
        permissions: [STORE_PERMISSIONS.STORE_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.offers',
        path: '/sales/offers',
        partialMatch: true,
        icon: <OfferOrderIcon fontSize='small' />,
        permissions: [STORE_PERMISSIONS.STORE_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.suborders',
        path: '/sales/suborders',
        partialMatch: true,
        icon: <ShopTwoIcon fontSize='small' />,
        permissions: [STORE_PERMISSIONS.STORE_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.issues',
        path: '/sales/issues',
        partialMatch: true,
        icon: <FeedbackIcon fontSize='small' />,
        permissions: [STORE_PERMISSIONS.STORE_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.refunds',
        path: '/sales/refunds',
        partialMatch: true,
        icon: <AssignmentReturnIcon fontSize='small' />,
        permissions: [STORE_PERMISSIONS.STORE_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.settings',
        path: '/sales/settings',
        partialMatch: true,
        icon: <SettingsOutlinedIcon fontSize='small' />,
        permissions: [STORE_PERMISSIONS.STORE_VIEW],
      },
    ],
  },
  {
    title: 'main_menu.admin.section.clients.title',
    prefix: '/crm',
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.clients.clients',
        path: '/crm/clients',
        partialMatch: true,
        icon: <GroupIcon fontSize='small' />,
      },
      {
        title: 'main_menu.admin.section.clients.reviews',
        path: '/crm/reviews',
        partialMatch: true,
        icon: <RateReview fontSize='small' />,
      },
      {
        title: 'main_menu.admin.section.clients.report-causes',
        path: '/crm/report-causes',
        partialMatch: true,
        icon: <Report fontSize='small' />,
      },
      /* {
        title: 'main_menu.admin.section.clients.messages',
        path: '/crm/messages',
        icon: <MessageIcon fontSize='small' />,
      },
      {
        title: 'main_menu.admin.section.clients.subscriptions',
        path: '/crm/subscriptions',
        icon: <HowToRegIcon fontSize='small' />,
      }, */
    ],
  },
  {
    title: 'main_menu.admin.section.cms.title',
    prefix: '/cms',
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.cms.seo',
        path: '/cms/seo',
        partialMatch: true,
        icon: <TravelExplore fontSize='small' />,
      },
    ],
  },
  {
    title: 'main_menu.admin.section.reports.title',
    prefix: '/reports',
    permissions: [STORE_PERMISSIONS.STORE_VIEW],
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.reports.inventory',
        path: '/reports/finance',
        partialMatch: true,
        icon: <PaidIcon fontSize='small' />,
        permissions: [STORE_PERMISSIONS.STORE_VIEW],
        children: [
          {
            title: 'main_menu.admin.section.reports.products',
            path: '/reports/finance',
            partialMatch: true,
            permissions: [STORE_PERMISSIONS.STORE_VIEW],
          },
          {
            title: 'main_menu.admin.section.reports.inventoryItem',
            path: '/reports/inventory',
            partialMatch: true,
            permissions: [STORE_PERMISSIONS.STORE_VIEW],
          },
          {
            title: 'main_menu.admin.section.reports.store',
            path: '/reports/finance',
            partialMatch: true,
            permissions: [STORE_PERMISSIONS.STORE_VIEW],
          },
          {
            title: 'main_menu.admin.section.reports.categories',
            path: '/reports/finance',
            partialMatch: true,
            permissions: [STORE_PERMISSIONS.STORE_VIEW],
          },
        ],
      },
      {
        title: 'main_menu.admin.section.reports.sales',
        path: '/reports/finance',
        partialMatch: true,
        icon: <PaidIcon fontSize='small' />,
        permissions: [STORE_PERMISSIONS.STORE_VIEW],
        children: [
          {
            title: 'main_menu.admin.section.reports.finance',
            path: '/reports/finance',
            partialMatch: true,
            permissions: [STORE_PERMISSIONS.STORE_VIEW],
          },
          {
            title: 'main_menu.admin.section.reports.sales',
            path: '/reports/sales',
            partialMatch: true,
            permissions: [STORE_PERMISSIONS.STORE_VIEW],
          },
          {
            title: 'main_menu.admin.section.reports.offers',
            path: '/reports/offers',
            partialMatch: true,
            permissions: [STORE_PERMISSIONS.STORE_VIEW],
          },
          {
            title: 'main_menu.admin.section.reports.issues',
            path: '/reports/issues',
            partialMatch: true,
            permissions: [STORE_PERMISSIONS.STORE_VIEW],
          },
          {
            title: 'main_menu.admin.section.reports.refunds',
            path: '/reports/refunds',
            partialMatch: true,
            permissions: [STORE_PERMISSIONS.STORE_VIEW],
          },
        ],
      },
      {
        title: 'main_menu.admin.section.reports.clients',
        path: '/reports/clients',
        partialMatch: true,
        icon: <GroupIcon fontSize='small' />,
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
        path: '/security/users/',
        icon: <AssignmentIndOutlinedIcon fontSize='small' />,
        permissions: ['ADMIN'],
        partialMatch: true,
      },
      {
        title: 'main_menu.admin.section.security.usersInvite',
        path: '/security/users-invite',
        icon: <AssignmentIndOutlinedIcon fontSize='small' />,
        permissions: ['ADMIN']
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
];
