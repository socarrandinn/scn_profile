import { lazy } from 'react';

const loadConciliationAdjustmentList = () =>
  import('modules/sales/conciliation/adjustment/pages/ConciliationAdjustmentList');
export const ConciliationAdjustmentList = lazy(loadConciliationAdjustmentList);
