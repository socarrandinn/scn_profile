import { OrderCommonService } from 'modules/sales/common/services';
import { IOrder } from 'modules/sales/common/interfaces/IOrder';
import { ApiClientService } from '@dfl/react-security';

class PaidOrderService extends OrderCommonService<IOrder> {
  validateBulk = (params: any, config?: any): any => {
    return ApiClientService.patch(this.getPath('/validate-bulk'), params, config);
  };
}

export default new PaidOrderService('/ms-sales/api/orders');
