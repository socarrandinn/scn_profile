import { OrderCommonService } from 'modules/sales/common/services';
import { IOrder, IShipping } from 'modules/sales/common/interfaces/IOrder';
import { ApiClientService } from '@dfl/react-security';

class PaidOrderService extends OrderCommonService<IOrder> {
  validateBulk = (params: any, config?: any): any => {
    return ApiClientService.post(this.getPath('/validate'), params, config);
  };

  updateShipping = (id: string | undefined, values: Partial<IShipping>): any => {
    if (id) {
      return this.handleResponse(ApiClientService.patch(this.getPath(`/${id}/shipping`), values));
    }
  };

  updateShippingAndValidate = (id: string | undefined, values: Partial<IShipping>): any => {
    if (id) {
      return this.handleResponse(ApiClientService.post(this.getPath(`/${id}/shipping/validate`), values));
    }
  };
}

export default new PaidOrderService('/ms-sales/api/orders');
