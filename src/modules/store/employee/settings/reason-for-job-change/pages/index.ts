import { lazy } from 'react';

const loadReasonForJobChangeList = () =>
  import('modules/store/employee/settings/reason-for-job-change/pages/ReasonForJobChangeList');
export const ReasonForJobChangeList = lazy(loadReasonForJobChangeList);
