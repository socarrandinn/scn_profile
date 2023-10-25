import { lazy } from 'react';

const loadJobPositionList = () => import('modules/inventory/product/settings/job-position/pages/JobPositionList');
export const JobPositionList = lazy(loadJobPositionList);
