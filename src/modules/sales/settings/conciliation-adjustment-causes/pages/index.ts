import { lazy } from 'react';

const loadConciliationAdjustmentCausesList = () =>
  import('modules/sales/settings/conciliation-adjustment-causes/pages/ConciliationAdjustmentCausesList');
export const ConciliationAdjustmentCausesList = lazy(loadConciliationAdjustmentCausesList);
