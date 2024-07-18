import { EntityApiService } from '@dfl/react-security';
import { IOffer } from 'modules/sales-offer/offer/interfaces';

class CouponOrderService extends EntityApiService<IOffer> {}

export default new CouponOrderService('/ms-sales/api/coupon');
