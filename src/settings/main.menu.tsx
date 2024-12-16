import { IMenu } from '@dfl/mui-react-common';
import SecurityOutlinedIcon from '@mui/icons-material/Security';
import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentInd';
import SettingsOutlinedIcon from '@mui/icons-material/Settings';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';
import { PRODUCT_PERMISSIONS } from 'modules/inventory/product/constants';
import OfferOrderIcon from 'components/libs/Icons/OfferOrderIcon';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import { AssignmentReturnOutlined, ContentPasteSearchOutlined, FeedbackOutlined, GroupOutlined, HomeOutlined, Inventory2Outlined, LocalMallOutlined, PaidOutlined, RateReviewOutlined, ShopTwoOutlined, StorefrontOutlined, StoreOutlined, TravelExploreOutlined } from '@mui/icons-material';
import { DISTRIBUTION_CENTER_PERMISSIONS } from 'modules/inventory/distribution-centers/constants';

export const MAIN_MENU: IMenu[] = [
  {
    title: 'main_menu.admin.section.general.title',
    items: [
      {
        title: 'main_menu.admin.section.general.home',
        path: '/',
        icon: <HomeOutlined fontSize='small' />,
      },
    ],
  },
  {
    title: 'main_menu.admin.section.warehouse.title',
    prefix: '/inventory',
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
        permissions: [DISTRIBUTION_CENTER_PERMISSIONS.DISTRIBUTION_CENTER_VIEW],
      },
      {
        title: 'main_menu.admin.section.warehouse.settings',
        path: '/inventory/settings',
        partialMatch: true,
        icon: <SettingsOutlinedIcon fontSize='small' />,
      },
    ],
  },
  {
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
        icon: <SettingsOutlinedIcon fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
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
        icon: <SettingsOutlinedIcon fontSize='small' />,
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
  {
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
  {
    title: 'main_menu.admin.section.reports.title',
    prefix: '/reports',
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.reports.inventory',
        path: '/reports/finance',
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
        partialMatch: true,
      },
      {
        title: 'main_menu.admin.section.security.usersProviders',
        path: '/security/providers-users',
        icon: <AssignmentIndOutlinedIcon fontSize='small' />,
        permissions: ['ADMIN'],
        partialMatch: true,
      },
      {
        title: 'main_menu.admin.section.security.roles',
        path: '/security/roles',
        partialMatch: true,
        icon: <SecurityOutlinedIcon fontSize='small' />,
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
];
