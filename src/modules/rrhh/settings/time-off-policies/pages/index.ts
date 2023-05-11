import { lazy } from 'react';

const loadTimeOffPoliciesList = () => import('modules/rrhh/settings/time-off-policies/pages/TimeOffPoliciesList');
export const TimeOffPoliciesList = lazy(loadTimeOffPoliciesList);
