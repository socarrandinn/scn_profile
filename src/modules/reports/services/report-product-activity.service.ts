import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IWarehouse } from 'modules/inventory/warehouse/interfaces';

class ReportProductActivityService extends EntityApiService<IWarehouse> {
  searchStockActivity = (productId: string, params?: any, config?: any): any => {
    if (productId) {
      return this.handleSearchResponse(
        ApiClientService.post(
          this.getPath(`/${productId}/stock-activity/search`),
          { ...params, populate: true },
          config,
        ),
        10,
      );
    }
    throw new Error('You must need a productId');
  };
}

export default new ReportProductActivityService('/ms-inventory/api/products');
