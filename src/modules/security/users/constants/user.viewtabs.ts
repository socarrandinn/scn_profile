import { TabViews } from '@dfl/mui-admin-layout';

export const userViewTabs: TabViews = {
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
          field: 'security.lock',
          value: false,
        },
        {
          type: 'TERM',
          field: 'security.verified',
          value: true,
        },
      ],
    },
  },
  unverify: {
    title: 'unverify',
    filters: {
      type: 'TERM',
      field: 'security.verified',
      value: false,
    },
  },
  lock: {
    title: 'lock',
    filters: {
      type: 'TERM',
      field: 'security.lock',
      value: true,
    },
  },
};
