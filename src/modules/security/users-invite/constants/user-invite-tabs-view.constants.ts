import { TabViews } from '@dfl/mui-admin-layout';
import { USER_INVITE_STATUS_ENUM } from '../interfaces';

export const USER_INVITE_VIEWS: TabViews = {
  all: {
    title: 'all',
    filters: {},
  },
  [USER_INVITE_STATUS_ENUM.PENDING]: {
    title: `statusName.${USER_INVITE_STATUS_ENUM.PENDING}`,
    filters: {
      type: 'TERM',
      field: 'status',
      value: USER_INVITE_STATUS_ENUM.PENDING,
    },
  },
  [USER_INVITE_STATUS_ENUM.ACCEPTED]: {
    title: `statusName.${USER_INVITE_STATUS_ENUM.ACCEPTED}`,
    filters: {
      type: 'TERM',
      field: 'status',
      value: USER_INVITE_STATUS_ENUM.ACCEPTED,
    },
  },
  [USER_INVITE_STATUS_ENUM.CANCELED]: {
    title: `statusName.${USER_INVITE_STATUS_ENUM.CANCELED}`,
    filters: {
      type: 'TERM',
      field: 'status',
      value: USER_INVITE_STATUS_ENUM.CANCELED,
    },
  },
};
