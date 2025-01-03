import {
  ElectricRickshawOutlined,
  EventBusyOutlined,
  LocalShippingOutlined,
  PublishedWithChangesOutlined,
  StorefrontOutlined,
} from '@mui/icons-material';
import { ROOT_MENU_ENUM } from './menus.enum';
import { IMenu } from '@dfl/mui-react-common';
import { WAREHOUSE_PERMISSIONS } from 'modules/inventory/warehouse/constants';
import { ORDER_PERMISSIONS } from 'modules/sales/common/constants/order-permissions';
import {
  NotPaidOrderIcon,
  OfferIcon,
  OrderIcon,
  OrderIssuesIcon,
  RefundIcon,
  SubOrderIcon,
} from 'modules/sales/common/components/icons';
import { WAREHOUSE_PICKUP_PERMISSIONS } from 'modules/sales/settings/warehouse-pickup/constants';
import { HOME_DELIVERY_PERMISSIONS } from 'modules/sales/settings/home-delivery/constants';
import { CAUSES_INCIDENCE_PERMISSIONS } from 'modules/sales/settings/causes-incidence/constants';
import { ORDER_STATUS_PERMISSIONS } from 'modules/sales/settings/order-status/constants';
import { SECTION_REPORTS_MENU } from './section-report-menu';

export const SALES_MENU: IMenu[] = [
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
        icon: <OrderIcon fontSize='small' />,
        permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.suborders',
        path: '/sales/suborders',
        partialMatch: true,
        icon: <SubOrderIcon fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },

      {
        title: 'main_menu.admin.section.sales.issues',
        path: '/sales/issues',
        partialMatch: true,
        icon: <OrderIssuesIcon fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.refunds',
        path: '/sales/refunds',
        partialMatch: true,
        icon: <RefundIcon fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.offers',
        path: '/sales/offers',
        partialMatch: true,
        icon: <OfferIcon fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.pre-orders',
        path: '/sales/pre-orders',
        partialMatch: true,
        icon: <NotPaidOrderIcon fontSize='small' />,
        permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
      },
    ],
  },
  ...SECTION_REPORTS_MENU[ROOT_MENU_ENUM.SALES],
  {
    title: 'main_menu.admin.section.general.settings',
    prefix: '/sales/settings',
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
    atLessOne: true,
    items: [
      {
        title: 'warehousePickup:list',
        path: '/sales/settings/warehouse-pickup',
        partialMatch: true,
        icon: <StorefrontOutlined fontSize='small' />,
        permissions: [WAREHOUSE_PICKUP_PERMISSIONS.WAREHOUSE_PICKUP_VIEW],
      },
      {
        title: 'homeDelivery:list',
        path: '/sales/settings/home-deliveries',
        partialMatch: true,
        icon: <LocalShippingOutlined fontSize='small' />,
        permissions: [HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_VIEW],
      },
      {
        title: 'expressDelivery:list',
        path: '/sales/settings/express-deliveries',
        partialMatch: true,
        icon: <ElectricRickshawOutlined fontSize='small' />,
        permissions: [WAREHOUSE_PICKUP_PERMISSIONS.WAREHOUSE_PICKUP_VIEW],
      },

      {
        title: 'orderStatus:list',
        path: '/sales/settings/order-status',
        partialMatch: true,
        icon: <PublishedWithChangesOutlined fontSize='small' />,
        permissions: [ORDER_STATUS_PERMISSIONS.ORDER_STATUS_VIEW],
      },
      {
        title: 'causesIncidence:list',
        path: '/sales/settings/causes-incidence',
        partialMatch: true,
        icon: <EventBusyOutlined fontSize='small' />,
        permissions: [CAUSES_INCIDENCE_PERMISSIONS.CAUSES_INCIDENCE_VIEW],
      },
    ],
  },
];
