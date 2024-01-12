import { lazy } from 'react';

const loadClientsList = () => import('modules/crm/clients/pages/ClientsList');
export const ClientsList = lazy(loadClientsList);
