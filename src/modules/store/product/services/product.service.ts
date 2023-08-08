import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IAddress } from 'modules/common/interfaces';
import { IProductCreate } from 'modules/store/product/interfaces/IProductCreate';

class ProductService extends EntityApiService<IProductCreate> {
  updateAddressInfo = (productId: string, params: IAddress, config?: RequestConfig): Promise<IAddress> => {
    return this.handleResponse(ApiClientService.patch(this.getPath(`/${productId}/address`), params, config));
  };
}

export default new ProductService('/ms-inventory/api/product');
