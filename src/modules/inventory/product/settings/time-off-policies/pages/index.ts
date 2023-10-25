import { lazy } from 'react';

const loadTimeOffPoliciesList = () => import('modules/inventory/product/settings/time-off-policies/pages/TimeOffPoliciesList');
export const TimeOffPoliciesList = lazy(loadTimeOffPoliciesList);
