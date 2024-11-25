import {
  AssignmentIndOutlined,
  AssignmentReturnOutlined,
  ContentPasteSearchOutlined,
  FeedbackOutlined,
  GroupOutlined,
  HomeOutlined,
  Inventory2Outlined,
  LocalMallOutlined,
  PaidOutlined,
  RateReviewOutlined,
  SecurityOutlined,
  SettingsOutlined,
  ShopTwoOutlined,
  StorefrontOutlined,
  StoreOutlined,
  TravelExploreOutlined,
} from '@mui/icons-material';
import { ROOT_MENU_ENUM } from './menus.enum';
import { IMenu } from '@dfl/mui-react-common';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import OfferOrderIcon from 'components/libs/Icons/OfferOrderIcon';

export const SECTION_MENUS: Record<ROOT_MENU_ENUM, IMenu> = {
  [ROOT_MENU_ENUM.HOME]: {
    title: 'main_menu.admin.section.general.title',
    items: [
      {
        title: 'main_menu.admin.section.general.home',
        path: '/',
        icon: <HomeOutlined fontSize='small' />,
      },
    ],
  },
  [ROOT_MENU_ENUM.INVENTORY]: {
    title: 'main_menu.admin.section.warehouse.title',
    prefix: '/inventory',
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW, PRODUCT_PERMISSIONS.PRODUCT_VIEW],
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.warehouse.products',
        path: '/inventory/products',
        partialMatch: true,
        icon: <Inventory2Outlined fontSize='small' />,
        permissions: [PRODUCT_PERMISSIONS.PRODUCT_VIEW],
      },
      {
        title: 'main_menu.admin.section.warehouse.warehouses',
        path: '/inventory/warehouses',
        partialMatch: true,
        icon: <StoreOutlined fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
      {
        title: 'main_menu.admin.section.warehouse.distribution-centers',
        path: '/inventory/distribution-centers',
        partialMatch: true,
        icon: <StorefrontOutlined fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
      {
        title: 'main_menu.admin.section.warehouse.settings',
        path: '/inventory/settings',
        partialMatch: true,
        icon: <SettingsOutlined fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
    ],
  },
  [ROOT_MENU_ENUM.SALES]: {
    title: 'main_menu.admin.section.sales.title',
    prefix: '/sales',
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.sales.paid-orders',
        path: '/sales/orders',
        partialMatch: true,
        icon: <LocalMallOutlined fontSize='small' />,
        permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.suborders',
        path: '/sales/suborders',
        partialMatch: true,
        icon: <ShopTwoOutlined fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },

      {
        title: 'main_menu.admin.section.sales.issues',
        path: '/sales/issues',
        partialMatch: true,
        icon: <FeedbackOutlined fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.refunds',
        path: '/sales/refunds',
        partialMatch: true,
        icon: <AssignmentReturnOutlined fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.offers',
        path: '/sales/offers',
        partialMatch: true,
        icon: <OfferOrderIcon fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.pre-orders',
        path: '/sales/pre-orders',
        partialMatch: true,
        icon: <LocalMallOutlined fontSize='small' />,
        permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.settings',
        path: '/sales/settings',
        partialMatch: true,
        icon: <SettingsOutlined fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
    ],
  },
  [ROOT_MENU_ENUM.CRM]: {
    title: 'main_menu.admin.section.clients.title',
    prefix: '/crm',
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.clients.clients',
        path: '/crm/clients',
        partialMatch: true,
        icon: <GroupOutlined fontSize='small' />,
      },
      {
        title: 'main_menu.admin.section.clients.reviews',
        path: '/crm/reviews',
        partialMatch: true,
        icon: <RateReviewOutlined fontSize='small' />,
        // chip: <ReviewPendingChip />,
      },
      {
        title: 'main_menu.admin.section.warehouse.settings',
        path: '/crm/settings',
        partialMatch: true,
        icon: <SettingsOutlined fontSize='small' />,
      },
      /* {
        title: 'main_menu.admin.section.clients.report-causes',
        path: '/crm/settings/report-causes',
        partialMatch: true,
        icon: <Report fontSize='small' />,
      },
      {
        title: 'main_menu.admin.section.clients.disallowedWords',
        path: '/crm/settings/disallowed-words',
        icon: <DescriptionIcon fontSize='small' />,
      }, */
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
  [ROOT_MENU_ENUM.CMS]: {
    title: 'main_menu.admin.section.cms.title',
    prefix: '/cms',
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.cms.seo',
        path: '/cms/seo',
        partialMatch: true,
        icon: <TravelExploreOutlined fontSize='small' />,
      },
    ],
  },
  [ROOT_MENU_ENUM.REPORTS]: {
    title: 'main_menu.admin.section.reports.title',
    prefix: '/reports',
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.reports.inventory',
        path: '/reports/inventory',
        partialMatch: true,
        icon: <PaidOutlined fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
        children: [
          {
            title: 'main_menu.admin.section.reports.products',
            path: '/reports/finance',
            partialMatch: true,
            permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
          },
          {
            title: 'main_menu.admin.section.reports.inventoryItem',
            path: '/reports/inventory',
            partialMatch: true,
            permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
          },
          {
            title: 'main_menu.admin.section.reports.warehouse',
            path: '/reports/finance',
            partialMatch: true,
            permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
          },
          {
            title: 'main_menu.admin.section.reports.categories',
            path: '/reports/finance',
            partialMatch: true,
            permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
          },
        ],
      },
      {
        title: 'main_menu.admin.section.reports.sales',
        path: '/reports/finance',
        partialMatch: true,
        icon: <PaidOutlined fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
        children: [
          {
            title: 'main_menu.admin.section.reports.finance',
            path: '/reports/finance',
            partialMatch: true,
            permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
          },
          {
            title: 'main_menu.admin.section.reports.sales',
            path: '/reports/sales',
            partialMatch: true,
            permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
          },
          {
            title: 'main_menu.admin.section.reports.offers',
            path: '/reports/offers',
            partialMatch: true,
            permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
          },
          {
            title: 'main_menu.admin.section.reports.issues',
            path: '/reports/issues',
            partialMatch: true,
            permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
          },
          {
            title: 'main_menu.admin.section.reports.refunds',
            path: '/reports/refunds',
            partialMatch: true,
            permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
          },
        ],
      },
      {
        title: 'main_menu.admin.section.reports.clients',
        path: '/reports/clients',
        partialMatch: true,
        icon: <GroupOutlined fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
    ],
  },
  [ROOT_MENU_ENUM.SECURITY]: {
    title: 'main_menu.admin.section.security.title',
    permissions: ['ADMIN'],
    prefix: '/security',
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.security.users',
        path: '/security/users',
        icon: <AssignmentIndOutlined fontSize='small' />,
        permissions: ['ADMIN'],
        partialMatch: true,
      },
      {
        title: 'main_menu.admin.section.security.usersProviders',
        path: '/security/providers-users',
        icon: <AssignmentIndOutlined fontSize='small' />,
        permissions: ['ADMIN'],
        partialMatch: true,
      },
      {
        title: 'main_menu.admin.section.security.roles',
        path: '/security/roles',
        partialMatch: true,
        icon: <SecurityOutlined fontSize='small' />,
        permissions: ['ADMIN'],
      },
      {
        title: 'main_menu.admin.section.security.auditLogs',
        path: '/security/audit-logs',
        partialMatch: true,
        icon: <ContentPasteSearchOutlined fontSize='small' />,
        permissions: ['ADMIN'],
      },
    ],
  },
};
