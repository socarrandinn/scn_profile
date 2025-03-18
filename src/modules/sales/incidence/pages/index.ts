import { lazy } from 'react';

const loadIncidenceList = () => import('modules/sales/incidence/pages/IncidenceList');
export const IncidenceList = lazy(loadIncidenceList);
