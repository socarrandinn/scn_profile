import { lazy } from 'react';

const loadTimeOffRequestsList = () => import('modules/store/employee/time-off/pages/TimeOffRequestsList');
export const TimeOffRequestsList = lazy(loadTimeOffRequestsList);
