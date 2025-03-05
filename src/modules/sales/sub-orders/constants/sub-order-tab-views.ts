import { TabViews } from '@dfl/mui-admin-layout';
import { ORDER_STATUS_TYPE_ENUM } from 'modules/sales/settings/order-status/constants';

export const subOrderTabViews: TabViews = {
  all: {
    title: 'common:all',
    filters: {},
  },
  PENDING: {
    title: 'orderStatus:fields.orderStatusType.PENDING',
    filters: [
      {
        type: 'TERM',
        field: 'status.type',
        value: ORDER_STATUS_TYPE_ENUM.PENDING_PAYMENT,
      },
      {
        type: 'TERM',
        field: 'status.type',
        value: ORDER_STATUS_TYPE_ENUM.PENDING_REFUNDED,
      },

    ],
  },
  PENDING_REFUNDED: {
    title: `orderStatus:fields.orderStatusType.${ORDER_STATUS_TYPE_ENUM.PENDING_REFUNDED}`,
    filters: {
      type: 'TERM',
      field: 'status.type',
      value: ORDER_STATUS_TYPE_ENUM.PENDING_REFUNDED,
    },
  },
  CANCELED: {
    title: `orderStatus:fields.orderStatusType.${ORDER_STATUS_TYPE_ENUM.CANCELED}`,
    filters: {
      type: 'TERM',
      field: 'status.type',
      value: ORDER_STATUS_TYPE_ENUM.CANCELED,
    },
  },
  ERROR: {
    title: `orderStatus:fields.orderStatusType.${ORDER_STATUS_TYPE_ENUM.ERROR}`,
    filters: {
      type: 'TERM',
      field: 'status.type',
      value: ORDER_STATUS_TYPE_ENUM.ERROR,
    },
  },
};
