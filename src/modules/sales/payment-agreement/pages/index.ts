import { lazy } from 'react';

const loadPaymentAgreementList = () => import('modules/sales/payment-agreement/pages/PaymentAgreementList');
export const PaymentAgreementList = lazy(loadPaymentAgreementList);

const loadPaymentAgreementDetails = () => import('modules/sales/payment-agreement/pages/PaymentAgreementDetails');
export const PaymentAgreementDetails = lazy(loadPaymentAgreementDetails);
