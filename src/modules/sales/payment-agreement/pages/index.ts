import { lazy } from 'react';

const loadPaymentAgreementList = () => import('modules/sales/payment-agreement/pages/PaymentAgreementList');
export const PaymentAgreementList = lazy(loadPaymentAgreementList);
