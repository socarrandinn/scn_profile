import { lazy } from 'react';

const loadClientsList = () => import('modules/crm/clients/pages/ClientsList');
export const ClientsList = lazy(loadClientsList);

const loadClientDetails = () => import('modules/crm/clients/pages/ClientDetails');
export const ClientDetails = lazy(loadClientDetails);
