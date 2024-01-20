import { TabViews } from '@dfl/mui-admin-layout';

export const productTabs: TabViews = {
  all: {
    title: 'all',
    filters: {},
  },
  active: {
    title: 'visibles',
    filters: {
      type: 'TERM',
      field: 'visible',
      value: true,
    },
  },
  inactive: {
    title: 'novisibles',
    filters: {
      type: 'TERM',
      field: 'visible',
      value: false,
    },
  },
};
