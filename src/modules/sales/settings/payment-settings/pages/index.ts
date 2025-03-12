import { lazy } from 'react';

const loadPaymentSettingsList = () => import('modules/sales/settings/payment-settings/pages/PaymentSettingsList');
export const PaymentSettingsList = lazy(loadPaymentSettingsList);
