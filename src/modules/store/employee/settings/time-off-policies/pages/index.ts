import { lazy } from 'react';

const loadTimeOffPoliciesList = () => import('modules/store/employee/settings/time-off-policies/pages/TimeOffPoliciesList');
export const TimeOffPoliciesList = lazy(loadTimeOffPoliciesList);
