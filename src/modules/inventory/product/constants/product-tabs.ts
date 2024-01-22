import { TabViews } from '@dfl/mui-admin-layout';

export const productTabs: TabViews = {
  all: {
    title: 'all',
    filters: {},
  },
  active: {
    title: 'visible',
    filters: {
      type: 'TERM',
      field: 'visible',
      value: true,
    },
  },
  inactive: {
    title: 'novisible',
    filters: {
      type: 'TERM',
      field: 'visible',
      value: false,
    },
  },
};
