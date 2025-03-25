import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IPaymentAgreement, IPaymentAgreementVerify } from 'modules/sales/payment-agreement/interfaces';

class PaymentAgreementService extends EntityApiService<IPaymentAgreement> {
  verify = (filters: any, search: any): Promise<IPaymentAgreementVerify> => {
    return this.handleResponse(ApiClientService.post(this.getPath('/verify'), { filters, search }));
  };

  add = (paymentAgreementId: string | null, params: any) => {
    if (paymentAgreementId) {
      return this.handleResponse(
        ApiClientService.post(this.getPath('/add-suborders'), { ...params, paymentAgreementId }),
      );
    }
    throw new Error('required paymentAgreementId');
  };

  remove = (paymentAgreementId: string, filters: any) => {
    if (paymentAgreementId) {
      return this.handleResponse(
        ApiClientService.delete(this.getPath(`/${paymentAgreementId}/remove-suborders`), {
          data: {
            filters,
          },
        }),
      );
    }
    throw new Error('required paymentAgreementId');
  };
}

export default new PaymentAgreementService('/ms-sales/api/payment-agreement');
