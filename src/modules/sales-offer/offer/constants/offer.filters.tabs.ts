import { TabViews } from '@dfl/mui-admin-layout';

export const OFFER_STATUS_VIEWS: TabViews = {
  all: {
    title: 'offer:statusTabs.ALL',
    filters: {
      type: 'OR',
      filters: [],
    },
  },
  active: {
    title: 'offer:statusTabs.ACTIVE',
    filters: {
      type: 'AND',
      filters: [
        {
          type: 'TERM',
          field: 'fromDate',
          value: { $lte: new Date() },
        },
        {
          type: 'TERM',
          field: 'toDate',
          value: { $gte: new Date() },
        },
      ],
    },
  },
  scheduled: {
    title: 'offer:statusTabs.SCHEDULED',
    filters: {
      type: 'TERM',
      field: 'fromDate',
      value: { $gt: new Date() },
    },
  },
  expired: {
    title: 'offer:statusTabs.EXPIRED',
    filters: {
      type: 'TERM',
      field: 'toDate',
      value: { $lt: new Date() },
    },
  },
};
