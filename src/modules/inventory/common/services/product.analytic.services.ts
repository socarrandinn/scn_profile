import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { PRODUCT_ANALYTIC_METRIC } from '../interfaces/IProductAnalytic';

class ProductAnalyticService extends EntityApiService<any> {
  storeDistributionSummary = (params?: any) => {
    const metric = PRODUCT_ANALYTIC_METRIC.STORE_DISTRIBUTION;
    return this.handleResponse(ApiClientService.post(this.getPath(`/${metric}`), params));
  };
}

export default new ProductAnalyticService('/ms-inventory/api/products/analytics');
