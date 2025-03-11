import { EntityApiService } from '@dfl/react-security';
import { ICurrencySettings } from 'modules/sales/settings/payment-settings/interfaces';

class PaymentMethodsService extends EntityApiService<ICurrencySettings> {}

export default new PaymentMethodsService('/ms-sales/api/payment-settings/method');
