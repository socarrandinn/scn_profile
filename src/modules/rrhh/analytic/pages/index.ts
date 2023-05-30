import { lazy } from 'react';

const loadAnalyticList = () => import('modules/rrhh/analytic/pages/General');
export const AnalyticList = lazy(loadAnalyticList);
