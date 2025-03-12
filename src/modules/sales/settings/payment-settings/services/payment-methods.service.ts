import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IPaymentMethod } from 'modules/sales/settings/payment-settings/interfaces';

class PaymentMethodsService extends EntityApiService<IPaymentMethod> {
  updateStatus(id: string, value: boolean) {
    return this.handleResponse(ApiClientService.patch(this.getPath(`/${id}/active`), { enabled: !value }));
  }
}

export default new PaymentMethodsService('/ms-sales/api/payment-settings/method');
