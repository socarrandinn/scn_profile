import { TabViews } from '@dfl/mui-admin-layout';
import { ORDER_STATUS_TYPE_ENUM } from 'modules/sales/settings/order-status/constants';

export const ORDER_VIEWS_ERROR: TabViews = {
  all: {
    title: 'tabsFilter.all',
    filters: {},
    params: {
      payedDate: 'LAST-THIRTY-DAYS',
    },
  },
};

export const PRE_ORDER_VIEWS: TabViews = {
  all: {
    title: 'tabsFilter.all',
    filters: {},
  },

  [ORDER_STATUS_TYPE_ENUM.PENDING_PAYMENT]: {
    title: `tabsFilter.${ORDER_STATUS_TYPE_ENUM.PENDING_PAYMENT}`,
    filters: {
      type: 'TERM',
      field: 'status.type',
      value: ORDER_STATUS_TYPE_ENUM.PENDING_PAYMENT,
    },
    params: {
      payedDate: 'LAST-THIRTY-DAYS',
    },
  },

  [ORDER_STATUS_TYPE_ENUM.CANCELED]: {
    title: `tabsFilter.${ORDER_STATUS_TYPE_ENUM.CANCELED}`,
    filters: {
      type: 'TERM',
      field: 'status.type',
      value: ORDER_STATUS_TYPE_ENUM.CANCELED,
    },
    params: {
      payedDate: 'LAST-THIRTY-DAYS',
    },
  },
};

export const SUB_ORDER_VIEWS: TabViews = {
  all: {
    title: 'tabsFilter.all',
    filters: {},
  },

  [ORDER_STATUS_TYPE_ENUM.PAID]: {
    title: `tabsFilter.${ORDER_STATUS_TYPE_ENUM.PAID}`,
    filters: {
      type: 'TERM',
      field: 'status.type',
      value: ORDER_STATUS_TYPE_ENUM.PAID,
    },
  },

  [ORDER_STATUS_TYPE_ENUM.VALIDATED]: {
    title: `tabsFilter.${ORDER_STATUS_TYPE_ENUM.VALIDATED}`,
    filters: {
      type: 'TERM',
      field: 'status.type',
      value: ORDER_STATUS_TYPE_ENUM.VALIDATED,
    },
  },

  [ORDER_STATUS_TYPE_ENUM.CANCELED]: {
    title: `tabsFilter.${ORDER_STATUS_TYPE_ENUM.CANCELED}`,
    filters: {
      type: 'TERM',
      field: 'status.type',
      value: ORDER_STATUS_TYPE_ENUM.CANCELED,
    },
  },

  [ORDER_STATUS_TYPE_ENUM.PENDING_REFUNDED]: {
    title: `tabsFilter.${ORDER_STATUS_TYPE_ENUM.PENDING_REFUNDED}`,
    filters: {
      type: 'TERM',
      field: 'status.type',
      value: ORDER_STATUS_TYPE_ENUM.PENDING_REFUNDED,
    },
  },

  [ORDER_STATUS_TYPE_ENUM.REFUNDED]: {
    title: `tabsFilter.${ORDER_STATUS_TYPE_ENUM.REFUNDED}`,
    filters: {
      type: 'TERM',
      field: 'status.type',
      value: ORDER_STATUS_TYPE_ENUM.REFUNDED,
    },
  },

  [ORDER_STATUS_TYPE_ENUM.ERROR]: {
    title: `tabsFilter.${ORDER_STATUS_TYPE_ENUM.ERROR}`,
    filters: {
      type: 'TERM',
      field: 'status.type',
      value: ORDER_STATUS_TYPE_ENUM.ERROR,
    },
  },
  DELAYED: {
    title: 'tabsFilter.DELAYED',
    filters: {
      type: 'TERM',
      field: 'shipping.deliveryDueDate',
      value: { $lte: new Date() },
    },
  },
};
