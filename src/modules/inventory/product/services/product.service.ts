import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IAddress } from 'modules/common/interfaces';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { IProductPriceDetails } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { IProductProviders } from 'modules/inventory/product/interfaces/IProductCreate';

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

  updatePrice = (productId: string, priceProduct: IProductPriceDetails): any => {
    return ApiClientService.patch(this.getPath(`/${productId}/price`), {
      priceDetails: priceProduct,
    });
  };

  updateProviders = (productId: string, providersProduct: IProductProviders): any => {
    const { supplier } = providersProduct;

    return ApiClientService.patch(this.getPath(`/${productId}/providers`), {
      supplier,
    });
  };
}

export default new ProductService('/ms-inventory/api/products');
