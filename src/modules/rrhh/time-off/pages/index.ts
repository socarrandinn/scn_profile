import { lazy } from 'react';

const loadTimeOffRequestsList = () => import('modules/rrhh/time-off/pages/TimeOffRequestsList');
export const TimeOffRequestsList = lazy(loadTimeOffRequestsList);
