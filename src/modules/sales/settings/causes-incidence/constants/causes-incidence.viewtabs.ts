import { TabViews } from '@dfl/mui-admin-layout';

export const causesIncidenceViewTabs: TabViews = {
  all: {
    title: 'all',
    filters: {},
  },

  public: {
    title: 'shopVisibility.public',
    filters: {
      type: 'TERM',
      field: 'shopVisibility',
      value: true,
    },
  },
  private: {
    title: 'shopVisibility.private',
    filters: {
      type: 'TERM',
      field: 'shopVisibility',
      value: false,
    },
  },
};
