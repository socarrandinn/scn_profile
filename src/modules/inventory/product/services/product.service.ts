import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IAddress } from 'modules/common/interfaces';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { IProductPriceDetails } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';
import { mapperObjectToArrayTags } from 'modules/inventory/settings/tags/services/tags-mapper';

class ProductService extends EntityApiService<IProduct> {
  getOne = (productId: string, config?: RequestConfig | undefined) => {
    return this.handleResponse(
      ApiClientService.get(this.getPath(`/${productId}`), config).then((data) => {
        const tags = mapperObjectToArrayTags(data?.data?.tags);
        return {
          ...data,
          data: {
            ...data.data,
            tags,
          },
        };
      }),
    );
  };

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

  // update shipping info
  updateShippingInfo = (payload: Partial<IProductCreate>): any => {
    const { _id, shippingSettings } = payload;
    if (_id) {
      return ApiClientService.patch(this.getPath(`/${_id}/shipping-info`), {
        ...shippingSettings,
      });
    }
    throw new Error('You must be inside a _id');
  };

  // update shipping time
  updateShippingTime = (payload: Partial<IProductCreate>): any => {
    const { _id, shippingSettings } = payload;
    if (_id) {
      return ApiClientService.patch(this.getPath(`/${_id}/shipping-time`), {
        ...shippingSettings?.estimatedTime,
      });
    }
    throw new Error('You must be inside a _id');
  };

  // update rules
  updateRules = (payload: Partial<IProductCreate>): any => {
    const { _id, rules } = payload;
    if (_id) {
      return ApiClientService.patch(this.getPath(`/${_id}/rules`), {
        ...rules,
      });
    }
    throw new Error('You must be inside a _id');
  };

  // update media
  updateMedia = (payload: Partial<IProductCreate>): any => {
    const { _id, media } = payload;
    if (_id) {
      return ApiClientService.patch(this.getPath(`/${_id}/media`), {
        media,
      });
    }
    throw new Error('You must be inside a _id');
  };

  // update score
  updateScore = (payload: Partial<IProductCreate>): any => {
    const { _id, score } = payload;
    if (_id) {
      return ApiClientService.patch(this.getPath(`/${_id}/score`), {
        score,
      });
    }
    throw new Error('You must be inside a _id');
  };

  // update score
  updateSeo = (payload: Partial<IProductCreate>): any => {
    const { _id, seo } = payload;
    if (_id) {
      return ApiClientService.patch(this.getPath(`/${_id}/seo`), {
        ...seo,
      });
    }
    throw new Error('You must be inside a _id');
  };

  // update providers
  updateProviders = (payload: Partial<IProductCreate>): any => {
    const { _id, providers } = payload;
    if (_id) {
      return ApiClientService.patch(this.getPath(`/${_id}/providers`), {
        providers,
      });
    }
    throw new Error('You must be inside a _id');
  };

  // update tags
  updateTags = (payload: Partial<IProductCreate>): any => {
    const { _id, tags } = payload;
    if (_id) {
      return ApiClientService.patch(this.getPath(`/${_id}`), {
        tags,
      });
    }
    throw new Error('You must be inside a _id');
  };
}

export default new ProductService('/ms-inventory/api/products');
