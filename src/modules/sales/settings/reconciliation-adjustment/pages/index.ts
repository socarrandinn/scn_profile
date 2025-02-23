import { lazy } from 'react';

const loadReconciliationAdjustmentList = () =>
  import('modules/sales/settings/reconciliation-adjustment/pages/ReconciliationAdjustmentList');
export const ReconciliationAdjustmentList = lazy(loadReconciliationAdjustmentList);
