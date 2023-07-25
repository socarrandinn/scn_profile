import { EntityApiService } from '@dfl/react-security';
import { IProvider } from '../interfaces/IProvider';

class ProductProvidersService extends EntityApiService<IProvider> { }

export default new ProductProvidersService('/ms-inventory/api/product-provider');
