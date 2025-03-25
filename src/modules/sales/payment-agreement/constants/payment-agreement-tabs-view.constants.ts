import { TabViews } from '@dfl/mui-admin-layout';
import { PAYMENT_AGREEMENT_STATUS_ENUM } from './payment-agreement.enum';

export const PAYMENT_AGREEMENT_VIEWS: TabViews = {
  all: {
    title: 'status.all',
    filters: {},
  },

  [PAYMENT_AGREEMENT_STATUS_ENUM.COMPLETED]: {
    title: `status.${PAYMENT_AGREEMENT_STATUS_ENUM.COMPLETED}`,
    filters: {
      type: 'TERM',
      field: 'status',
      value: PAYMENT_AGREEMENT_STATUS_ENUM.COMPLETED,
    },
  },

  [PAYMENT_AGREEMENT_STATUS_ENUM.PENDING]: {
    title: `status.${PAYMENT_AGREEMENT_STATUS_ENUM.PENDING}`,
    filters: {
      type: 'TERM',
      field: 'status',
      value: PAYMENT_AGREEMENT_STATUS_ENUM.PENDING,
    },
  },
  [PAYMENT_AGREEMENT_STATUS_ENUM.DELIVERY_PARTIAL]: {
    title: `status.${PAYMENT_AGREEMENT_STATUS_ENUM.DELIVERY_PARTIAL}`,
    filters: {
      type: 'TERM',
      field: 'status',
      value: PAYMENT_AGREEMENT_STATUS_ENUM.DELIVERY_PARTIAL,
    },
  },
};
