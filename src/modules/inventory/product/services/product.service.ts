import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IAddress } from 'modules/common/interfaces';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
// import { IProductPriceDetails } from 'modules/inventory/product/interfaces/IProductPriceDetails';

class ProductService extends EntityApiService<IProduct> {
  updateAddressInfo = (productId: string, params: IAddress, config?: RequestConfig): Promise<IAddress> => {
    return this.handleResponse(ApiClientService.patch(this.getPath(`/${productId}/address`), params, config));
  };

  updateStatus = (productId: string, status: boolean): any => {
    return ApiClientService.patch(this.getPath(`/${productId}/visibility`), {
      visible: status,
    });
  };

  productCode = (code: string, store: string): any => {
    return ApiClientService.post(this.getPath(`/by-code/${code}`), {
      store,
    });
  };

  updatePrice = (productId: string, priceProduct: any): any => {
    return ApiClientService.patch(this.getPath(`/${productId}/price`), {
      priceDetails: priceProduct,
    });
  };
}

export default new ProductService('/ms-inventory/api/products');
