import { lazy } from 'react';

const loadInputDemosPage = () => import('./InputDemosPage');
export const InputDemosPage = lazy(loadInputDemosPage);
