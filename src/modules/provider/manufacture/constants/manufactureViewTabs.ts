import { TabViews } from '@dfl/mui-admin-layout';

export const manufactureViewTabs: TabViews = {
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
          field: 'state',
          value: true,
        },
      ],
    },
  },
  inactive: {
    title: 'inactive',
    filters: {
      type: 'AND',
      filters: [
        {
          type: 'TERM',
          field: 'state',
          value: false,
        },
      ],
    },
  },
};
