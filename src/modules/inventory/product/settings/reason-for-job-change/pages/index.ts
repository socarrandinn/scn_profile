import { lazy } from 'react';

const loadReasonForJobChangeList = () =>
  import('modules/inventory/product/settings/reason-for-job-change/pages/ReasonForJobChangeList');
export const ReasonForJobChangeList = lazy(loadReasonForJobChangeList);
