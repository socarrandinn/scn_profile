import { TabViews } from '@dfl/mui-admin-layout';
import { ADMIN_REVIEW_STATUS_ENUM } from '../interfaces';

export const reviewsTabs: TabViews = {
  all: {
    title: 'all',
    filters: {},
  },
  [ADMIN_REVIEW_STATUS_ENUM.PENDING]: {
    title: `status.${ADMIN_REVIEW_STATUS_ENUM.PENDING}`,
    filters: {
      type: 'TERM',
      field: 'status',
      value: ADMIN_REVIEW_STATUS_ENUM.PENDING,
    },
  },
  [ADMIN_REVIEW_STATUS_ENUM.ACCEPTED]: {
    title: `status.${ADMIN_REVIEW_STATUS_ENUM.ACCEPTED}`,
    filters: {
      type: 'TERM',
      field: 'status',
      value: ADMIN_REVIEW_STATUS_ENUM.ACCEPTED,
    },
  },
  report: {
    title: 'report',
    filters: {
      type: 'TERM',
      field: 'report.count',
      value: { $gt: 0 },
    },
  },
};
