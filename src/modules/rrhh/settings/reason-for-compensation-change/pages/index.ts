import { lazy } from 'react';

const loadReasonForCompensationChangeList = () =>
  import('modules/rrhh/settings/reason-for-compensation-change/pages/ReasonForCompensationChangeList');
export const ReasonForCompensationChangeList = lazy(loadReasonForCompensationChangeList);
