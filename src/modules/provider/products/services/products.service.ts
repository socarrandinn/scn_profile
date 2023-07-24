import { EntityApiService } from '@dfl/react-security';
import { IProducts } from 'modules/provider/products/interfaces';

class ProductsService extends EntityApiService<IProducts> {}

export default new ProductsService('/ms-inventory/api/product-provider');
