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

export const ORDER_VIEWS: TabViews = {
  all: {
    title: 'tabsFilter.all',
    filters: {
      type: 'OR',
      filters: [],
    },
    params: {
      payedDate: 'LAST-THIRTY-DAYS',
    },
  },
  pending: {
    title: 'tabsFilter.pending',
    filters: {
      type: 'OR',
      filters: [],
    },
    params: {
      payedDate: 'LAST-THIRTY-DAYS',
    },
  },
  processing: {
    title: 'tabsFilter.processing',
    filters: {
      type: 'OR',
      filters: [],
    },
    params: {
      payedDate: 'LAST-THIRTY-DAYS',
    },
  },
  closed: {
    title: 'tabsFilter.closed',
    filters: {
      type: 'OR',
      filters: [],
    },
    params: {
      payedDate: 'LAST-THIRTY-DAYS',
    },
  },
  error: {
    title: 'tabsFilter.error',
    filters: {
      type: 'OR',
      filters: [],
    },
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
      type: 'OR',
      filters: [
        {
          type: 'TERM',
          field: 'status.type',
          value: ORDER_STATUS_TYPE_ENUM.PENDING_PAYMENT,
        },
      ],
    },
    params: {
      payedDate: 'LAST-THIRTY-DAYS',
    },
  },

  [ORDER_STATUS_TYPE_ENUM.CANCELED]: {
    title: `tabsFilter.${ORDER_STATUS_TYPE_ENUM.CANCELED}`,
    filters: {
      type: 'OR',
      filters: [
        {
          type: 'TERM',
          field: 'status.type',
          value: ORDER_STATUS_TYPE_ENUM.CANCELED,
        },
      ],
    },
    params: {
      payedDate: 'LAST-THIRTY-DAYS',
    },
  },
};
