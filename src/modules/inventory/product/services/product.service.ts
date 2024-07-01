import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IAddress } from 'modules/common/interfaces';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { IProductPriceDetails } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { IProductProviders } from 'modules/inventory/product/interfaces/IProductCreate';
import { IProductShippingInfo } from '../interfaces/IProductShippingInfo';

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

  updateReleatedProducts = (productId: string, relatedProducts: string[]): any => {
    return ApiClientService.patch(this.getPath(`/${productId}/releated-products`), {
      related: relatedProducts,
    });
  };

  updateProviders = (productId: string, providersProduct: IProductProviders): any => {
    const { supplier } = providersProduct;

    return ApiClientService.patch(this.getPath(`/${productId}/providers`), {
      supplier,
    });
  };

  // update shipping info
  updateShippingInfo = (shippingInfo: IProductShippingInfo): any => {
    const { _id, ...rest } = shippingInfo;
    return ApiClientService.patch(this.getPath(`/${_id}/shipping-info`), {
      ...rest,
    });
  };
}

export default new ProductService('/ms-inventory/api/products');
