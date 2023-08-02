import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import {
  IProduct
} from 'modules/store/common/interfaces';
import { IAddress } from 'modules/common/interfaces';

class ProductService extends EntityApiService<IProduct> {
  updateAddressInfo = (productId: string, params: IAddress, config?: RequestConfig): Promise<IAddress> => {
    return this.handleResponse(ApiClientService.patch(this.getPath(`/${productId}/address`), params, config));
  };
}

export default new ProductService('/ms-inventory/api/product');
