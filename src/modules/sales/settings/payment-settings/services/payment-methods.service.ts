import { EntityApiService } from '@dfl/react-security';
import { IPaymentMethod } from 'modules/sales/settings/payment-settings/interfaces';

class PaymentMethodsService extends EntityApiService<IPaymentMethod> {}

export default new PaymentMethodsService('/ms-sales/api/payment-settings/method');
