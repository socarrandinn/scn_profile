import { EntityApiService } from '@dfl/react-security';
import { IOffer } from 'modules/sales-offer/offer/interfaces';

class OfferService extends EntityApiService<IOffer> {}

export default new OfferService('offer-order');
