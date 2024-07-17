import { EntityApiService } from '@dfl/react-security';
import { IOffer } from 'modules/sales-offer/offer/interfaces';

class OfferOrderService extends EntityApiService<IOffer> {}

export default new OfferOrderService('/ms-sales/api/offer-order');
