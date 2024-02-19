import { lazy } from 'react';

const loadCauseCancellationList = () => import('modules/sales/settings/cause-cancellation/pages/CauseCancellationList');
export const CauseCancellationList = lazy(loadCauseCancellationList);
