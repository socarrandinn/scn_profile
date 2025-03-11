import { EntityApiService } from '@dfl/react-security';
import { ICurrencySettings } from 'modules/sales/settings/payment-settings/interfaces';

class PaymentSettingsService extends EntityApiService<ICurrencySettings> {}

export default new PaymentSettingsService('/ms-sales/api/payment-settings/currency');
