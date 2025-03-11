import { TabViews } from '@dfl/mui-admin-layout';
import { DISPATCH_STATUS_ENUM } from './dispatch.enum';

export const dispatchTabs: TabViews = {
  all: {
    title: 'status.all',
    filters: {},
  },
  [DISPATCH_STATUS_ENUM.PENDING]: {
    title: `status.${DISPATCH_STATUS_ENUM.PENDING}`,
    filters: {
      type: 'TERM',
      field: 'status',
      value: DISPATCH_STATUS_ENUM.PENDING,
    },
  },
  [DISPATCH_STATUS_ENUM.IN_PROGRESS]: {
    title: `status.${DISPATCH_STATUS_ENUM.IN_PROGRESS}`,
    filters: {
      type: 'TERM',
      field: 'status',
      value: DISPATCH_STATUS_ENUM.IN_PROGRESS,
    },
  },
  [DISPATCH_STATUS_ENUM.COMPLETED]: {
    title: `status.${DISPATCH_STATUS_ENUM.COMPLETED}`,
    filters: {
      type: 'TERM',
      field: 'status',
      value: DISPATCH_STATUS_ENUM.COMPLETED,
    },
  },
  [DISPATCH_STATUS_ENUM.CANCELED]: {
    title: `status.${DISPATCH_STATUS_ENUM.CANCELED}`,
    filters: {
      type: 'TERM',
      field: 'status',
      value: DISPATCH_STATUS_ENUM.CANCELED,
    },
  },
};
