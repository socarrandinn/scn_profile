import { ApiClientService, EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IAddress } from 'modules/common/interfaces';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';
import { IProductPriceDetails } from 'modules/inventory/product/interfaces/IProductPriceDetails';
import { IProductCreate } from 'modules/inventory/product/interfaces/IProductCreate';
import { mapperObjectToArrayTags } from 'modules/inventory/settings/tags/services/tags-mapper';
import { RELATED_PRODUCTS_ACTION } from '../constants/related-products.enum';

class ProductService extends EntityApiService<IProduct> {
  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IProduct>> => {
    params.projections = {
      owner: 0,
      barCode: 0,
      description: 0,
      lastPrice: 0,
      updatedAt: 0,
      rating: 0,
      referenceCode: 0,
      score: 0,
      seo: 0,
      shippingSettings: 0,
      shopSlug: 0,
      slug: 0,
      tags: 0,
      related: 0,
      id: 0,
    };
    return this.search(params, config);
  };

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

  productCode = (code: string, warehouse: string): any => {
    return ApiClientService.get(
      this.getPath(`/code/${code}`) /* {
      warehouse,
    } */,
    );
  };

  updatePrice = (productId: string, priceProduct: IProductPriceDetails): any => {
    return ApiClientService.patch(this.getPath(`/${productId}/price`), {
      priceDetails: priceProduct,
    });
  };

  updateRelatedProducts = (productId: string, relatedProducts: string[], action: RELATED_PRODUCTS_ACTION): any => {
    return ApiClientService.patch(this.getPath(`/${productId}/related-products/${action}`), {
      ids: relatedProducts,
    });
  };

  searchRelatedProducts = (productId: string, params?: any, config?: any): any => {
    return this.handleResponse(
      ApiClientService.post(this.getPath(`/${productId}/related-products/search`), params, config),
    );
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
      return ApiClientService.patch(this.getPath(`/${_id}/tags`), {
        tags,
      });
    }
    throw new Error('You must be inside a _id');
  };

  // delete in bulk
  deleteMany = (ids: string[]): any => {
    if (ids) {
      return ApiClientService.patch(this.getPath('/bulk/remove'), {
        ids,
      });
    }
    throw new Error('You must be inside a ids array');
  };
}

export default new ProductService('/ms-inventory/api/products');
