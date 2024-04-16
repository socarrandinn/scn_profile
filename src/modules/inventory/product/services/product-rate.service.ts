import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IProduct } from 'modules/inventory/product/interfaces/IProduct';

class ProductRateService extends EntityApiService<IProduct> {
  searchReview = (params: any, config?: RequestConfig): Promise<any> => {
    const { _id } = params;
    return this.handleResponse(
      ApiClientService.post(this.getPath(`/${_id as string}/search`), { ...params, typo: 'product' }, config),
    );
  };

  deleteRate = (productId: string, config?: RequestConfig): Promise<any> => {
    return this.handleResponse(ApiClientService.delete(this.getPath(`/${productId}`), config));
  };

  canCheckProduct = (productId: string, config?: RequestConfig): Promise<any> => {
    return this.handleResponse(ApiClientService.get(this.getPath(`/check/product/${productId}`), config));
  };
}

export default new ProductRateService('/ms-purchases/api/rate');
