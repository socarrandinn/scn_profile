import { lazy } from 'react';

const loadIncidenceList = () => import('modules/sales/incidence/pages/IncidenceList');
export const IncidenceList = lazy(loadIncidenceList);

const loadIncidenceDetails = () => import('modules/sales/incidence/pages/IncidenceDetails');
export const IncidenceDetails = lazy(loadIncidenceDetails);
