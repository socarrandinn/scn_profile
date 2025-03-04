import { TabViews } from '@dfl/mui-admin-layout';

export const causesIncidenceViewTabs: TabViews = {
  all: {
    title: 'all',
    filters: {},
  },

  public: {
    title: 'isPublic.public',
    filters: {
      type: 'TERM',
      field: 'isPublic',
      value: true,
    },
  },
  private: {
    title: 'isPublic.private',
    filters: {
      type: 'TERM',
      field: 'isPublic',
      value: false,
    },
  },
};
