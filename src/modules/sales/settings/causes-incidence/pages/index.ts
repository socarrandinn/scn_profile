import { lazy } from 'react';

const loadCausesIncidenceList = () => import('modules/sales/settings/causes-incidence/pages/CausesIncidenceList');
export const CausesIncidenceList = lazy(loadCausesIncidenceList);
