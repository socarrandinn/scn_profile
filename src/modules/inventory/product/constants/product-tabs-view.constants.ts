import { TabViews } from '@dfl/mui-admin-layout';

export const PRODUCT_VIEWS: TabViews = {
  all: {
    title: 'all',
    filters: {},
  },
  actives: {
    // title: 'actives',
    title: 'visibles',
    filters: {
      type: 'TERM',
      field: 'visible',
      value: true,
    },
  },
  inactives: {
    title: 'invisibles',
    filters: {
      type: 'TERM',
      field: 'visible',
      value: false,
    },
  },
};
