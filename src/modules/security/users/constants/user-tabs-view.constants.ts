import { TabViews } from '@dfl/mui-admin-layout';

export const USER_VIEWS: TabViews = {
  all: {
    title: 'all',
    filters: {},
  },
  active: {
    title: 'active',
    filters: {
      type: 'AND',
      filters: [
        {
          type: 'TERM',
          field: 'lock',
          value: false,
        },
        {
          type: 'TERM',
          field: 'verified',
          value: true,
        },
      ],
    },
  },
  unverify: {
    title: 'unverify',
    filters: {
      type: 'TERM',
      field: 'verified',
      value: false,
    },
  },
  lock: {
    title: 'lock',
    filters: {
      type: 'TERM',
      field: 'lock',
      value: true,
    },
  },
};
