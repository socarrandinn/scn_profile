import { EntityApiService } from '@dfl/react-security';
import { IProductDiscount } from 'modules/sales-offer/product-discount/interfaces';

class ProductDiscountService extends EntityApiService<IProductDiscount> {}

export default new ProductDiscountService('product-discount');
