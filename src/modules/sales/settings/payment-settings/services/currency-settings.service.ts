import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { ICurrencySettings } from 'modules/sales/settings/payment-settings/interfaces';

class PaymentSettingsService extends EntityApiService<ICurrencySettings> {
  findCurrency = (params?: any) => {
    return this.handleResponse(ApiClientService.get(this.getPath(''), params));
  };
}

export default new PaymentSettingsService('/ms-sales/api/payment-settings/currency');
