import { lazy } from 'react';

const loadBankList = () => import('modules/sales/settings/bank/pages/BankList');
export const BankList = lazy(loadBankList);
