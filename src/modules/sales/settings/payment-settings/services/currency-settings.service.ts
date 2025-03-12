import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { ICurrencySettings } from 'modules/sales/settings/payment-settings/interfaces';

class PaymentSettingsService extends EntityApiService<ICurrencySettings> {
  updateSettings = (params?: any, config?: RequestConfig) => {
    return this.handleResponse(ApiClientService.post(this.getPath('/update-settings'), params, config));
  };
}

export default new PaymentSettingsService('/ms-sales/api/payment-settings/currency');
