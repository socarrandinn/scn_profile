import {
  AccountBalanceOutlined,
  AssessmentOutlined,
  EventBusyOutlined,
  ListAlt,
  LocalShippingOutlined,
  MonetizationOnOutlined,
  PaymentsOutlined,
  PublishedWithChangesOutlined,
} from '@mui/icons-material';
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
import { HOME_DELIVERY_PERMISSIONS } from 'modules/sales/settings/home-delivery/constants';
import { CAUSES_INCIDENCE_PERMISSIONS } from 'modules/sales/settings/causes-incidence/constants';
import { ORDER_STATUS_PERMISSIONS } from 'modules/sales/settings/order-status/constants';
import { RECONCILIATION_ADJUSTMENT_PERMISSIONS } from 'modules/sales/settings/reconciliation-adjustment/constants/reconciliation-adjustment.permissions';
import { REPORTS_PERMISSIONS } from 'modules/dashboard/constant/reports.permissions';
import { DispatchIcon } from 'modules/sales/common/components/icons/DispatchIcon';
import { DISPATCH_PERMISSIONS } from 'modules/sales/dispatch/constants';
import { PAYMENT_SETTINGS_PERMISSIONS } from 'modules/sales/settings/payment-settings/constants';
import { BANK_PERMISSIONS } from 'modules/sales/settings/bank/constants';

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
        title: 'main_menu.admin.section.sales.Suborders',
        path: '/sales/sub-orders',
        partialMatch: true,
        icon: <SubOrderIcon fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.dispatches',
        path: '/sales/dispatches',
        partialMatch: true,
        icon: <DispatchIcon fontSize='small' />,
        permissions: [DISPATCH_PERMISSIONS.DISPATCH_VIEW],
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
  {
    title: 'main_menu.admin.section.general.reports',
    prefix: '/reports/sales',
    permissions: [REPORTS_PERMISSIONS.USER_ANALYTICS],
    atLessOne: true,
    items: [
      {
        title: 'main_menu.admin.section.sales.paid-orders',
        path: '/reports/sales/orders',
        partialMatch: true,
        icon: <AssessmentOutlined fontSize='small' />,
        permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.Suborders',
        path: '/reports/sales/sub-orders',
        partialMatch: true,
        icon: <AssessmentOutlined fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },

      {
        title: 'main_menu.admin.section.sales.issues',
        path: '/reports/sales/issues',
        partialMatch: true,
        icon: <AssessmentOutlined fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.refunds',
        path: '/reports/sales/refunds',
        partialMatch: true,
        icon: <AssessmentOutlined fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.offers',
        path: '/reports/sales/offers',
        partialMatch: true,
        icon: <AssessmentOutlined fontSize='small' />,
        permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
      },
      {
        title: 'main_menu.admin.section.sales.pre-orders',
        path: '/reports/sales/pre-orders',
        partialMatch: true,
        icon: <AssessmentOutlined fontSize='small' />,
        permissions: [ORDER_PERMISSIONS.ORDER_VIEW],
      },
    ],
  },
  {
    title: 'main_menu.admin.section.general.settings',
    prefix: '/sales/settings',
    permissions: [WAREHOUSE_PERMISSIONS.WAREHOUSE_VIEW],
    atLessOne: true,
    items: [
      {
        title: 'homeDelivery:list',
        path: '/sales/settings/home-deliveries',
        partialMatch: true,
        icon: <LocalShippingOutlined fontSize='small' />,
        permissions: [HOME_DELIVERY_PERMISSIONS.HOME_DELIVERY_VIEW],
      },
      {
        title: 'bank:list',
        path: '/sales/settings/banks',
        partialMatch: true,
        icon: <AccountBalanceOutlined fontSize='small' />,
        permissions: [BANK_PERMISSIONS.BANK_VIEW || PAYMENT_SETTINGS_PERMISSIONS.PAYMENT_SETTINGS_VIEW],
      },
      {
        title: 'paymentSettings:list',
        path: '/sales/settings/payment-settings',
        partialMatch: true,
        icon: <PaymentsOutlined fontSize='small' />,
        permissions: [PAYMENT_SETTINGS_PERMISSIONS.PAYMENT_SETTINGS_VIEW],
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
      {
        title: 'conciliationAdjustmentCauses:list',
        path: '/sales/settings/conciliation-adjustment-causes',
        partialMatch: true,
        icon: <ListAlt fontSize='small' />,
        permissions: [CAUSES_INCIDENCE_PERMISSIONS.CAUSES_INCIDENCE_VIEW],
      },
      {
        title: 'reconciliationAdjustment:list',
        path: '/sales/settings/reconciliation-adjustment',
        partialMatch: true,
        icon: <MonetizationOnOutlined fontSize='small' />,
        permissions: [RECONCILIATION_ADJUSTMENT_PERMISSIONS.RECONCILIATION_ADJUSTMENT_VIEW],
      },
    ],
  },
];
