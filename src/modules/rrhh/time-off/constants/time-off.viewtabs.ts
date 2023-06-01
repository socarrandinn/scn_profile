import { TabViews } from '@dfl/mui-admin-layout';
import { TimeOffStatusEnum } from 'modules/rrhh/time-off/constants/time-off-status.enum';

export const timeOffViewTabs: TabViews = {
  all: {
    title: 'all',
    filters: {},
  },
  pending: {
    title: 'pending',
    filters: {
      type: 'TERM',
      field: 'status',
      value: TimeOffStatusEnum.PENDING,
    },
  },
  proceeded: {
    title: 'proceeded',
    filters: {
      type: 'TERM',
      field: 'status',
      value: { $ne: TimeOffStatusEnum.PENDING },
    },
  },
};
