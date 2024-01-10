import { TabViews } from '@dfl/mui-admin-layout';

export const PRODUCT_VIEWS: TabViews = {
  all: {
    title: 'all',
    filters: {},
  },
  actives: {
    title: 'actives',
    filters: {
      type: 'TERM',
      field: 'visible',
      value: true,
    },
  },
  inactives: {
    title: 'inactives',
    filters: {
      type: 'TERM',
      field: 'visible',
      value: false,
    },
  },
};
