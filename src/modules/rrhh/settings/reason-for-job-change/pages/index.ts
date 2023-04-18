import { lazy } from 'react';

const loadReasonForJobChangeList = () =>
  import('modules/rrhh/settings/reason-for-job-change/pages/ReasonForJobChangeList');
export const ReasonForJobChangeList = lazy(loadReasonForJobChangeList);
