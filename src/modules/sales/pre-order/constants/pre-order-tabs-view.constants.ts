import { TabViews } from '@dfl/mui-admin-layout';

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
