import { lazy } from 'react';

const loadAccountDetails = () => import('modules/account/pages/AccountDetails');
export const AccountDetails = lazy(loadAccountDetails);
