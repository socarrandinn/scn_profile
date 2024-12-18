import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IProductFeature } from '../interfaces/IProductFeature';

class ProductFeatureService extends EntityApiService<IProductFeature> {
  updateStatus = (payload: Partial<IProductFeature>): any => {
    return ApiClientService.patch(this.getPath(`/${payload?._id as string}`), {
      ...payload,
    });
  };
}

export default new ProductFeatureService('/ms-inventory/api/product-features');
