import { EntityApiService } from '@dfl/react-security';
import { IPaymentAgreement } from 'modules/sales/payment-agreement/interfaces';

class PaymentAgreementService extends EntityApiService<IPaymentAgreement> {}

export default new PaymentAgreementService('/ms-sales/api/payment-agreement');
