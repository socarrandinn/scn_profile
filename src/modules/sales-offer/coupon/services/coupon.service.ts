import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IOffer } from 'modules/sales-offer/offer/interfaces';

class CouponOrderService extends EntityApiService<IOffer> {
  generalInfo = (payload: Partial<IOffer>) => {
    const { _id, ...rest } = payload;
    console.log(rest)
    if (_id) {
      return ApiClientService.patch(this.getPath(`/${_id}/general-info`), rest);
    }
    throw new Error('offer id is required');
  };

  customMessage = (payload: Partial<IOffer>) => {
    const { _id, ...rest } = payload;
    if (_id) {
      return ApiClientService.patch(this.getPath(`/${_id}/custom-message`), rest);
    }
    throw new Error('offer id is required');
  };

  rules = (payload: Partial<IOffer>) => {
    const { _id, ...rest } = payload;
    if (_id) {
      return ApiClientService.patch(this.getPath(`/${_id}/rules`), rest);
    }
    throw new Error('offer id is required');
  };
}

export default new CouponOrderService('/ms-sales/api/coupon');
