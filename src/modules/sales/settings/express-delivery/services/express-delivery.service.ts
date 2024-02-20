import { EntityApiService } from '@dfl/react-security';
import { IExpressDelivery } from 'modules/sales/settings/express-delivery/interfaces';

class ExpressDeliveryService extends EntityApiService<IExpressDelivery> {}

export default new ExpressDeliveryService('/ms-inventory/api/express-delivery');
