import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IAddress } from 'modules/common/interfaces';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';

class ProductService extends EntityApiService<IProduct> {
  updateAddressInfo = (productId: string, params: IAddress, config?: RequestConfig): Promise<IAddress> => {
    return this.handleResponse(ApiClientService.patch(this.getPath(`/${productId}/address`), params, config));
  };
}

export default new ProductService('/ms-inventory/api/products');
