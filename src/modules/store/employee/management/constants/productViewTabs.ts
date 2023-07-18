import { TabViews } from '@dfl/mui-admin-layout';

export const productViewTabs: TabViews = {
  all: {
    title: 'all',
    filters: {},
  },
  active: {
    title: 'active',
    filters: {
      type: 'TERM',
      field: 'active',
      value: true,
    },
  },
  inactive: {
    title: 'inactive',
    filters: {
      type: 'TERM',
      field: 'active',
      value: false,
    },
  },
};
