import { EntityApiService } from '@dfl/react-security';
import { IPaymentSettings } from 'modules/sales/settings/payment-settings/interfaces';

class PaymentSettingsService extends EntityApiService<IPaymentSettings> {}

export default new PaymentSettingsService('/ms-sales/api/payment-settings/currency');
