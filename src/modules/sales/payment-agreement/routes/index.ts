import { RouteConfig } from '@dfl/react-security';
import { PaymentAgreementList, PaymentAgreementDetails } from 'modules/sales/payment-agreement/pages';
import { PAYMENT_AGREEMENT_PERMISSIONS } from 'modules/sales/payment-agreement/constants/payment-agreement.permissions';

const routes: RouteConfig = {
  PaymentAgreementList: {
    path: '/',
    permissions: PAYMENT_AGREEMENT_PERMISSIONS.PAYMENT_AGREEMENT_VIEW,
    component: PaymentAgreementList,
  },

  PaymentAgreementDetails: {
    path: '/:id',
    permissions: PAYMENT_AGREEMENT_PERMISSIONS.PAYMENT_AGREEMENT_VIEW,
    component: PaymentAgreementDetails,
  },
};

export default routes;
