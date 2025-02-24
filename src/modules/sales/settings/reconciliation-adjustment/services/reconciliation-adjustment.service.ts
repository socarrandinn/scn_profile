import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IReconciliationAdjustment } from '../interfaces/IReconciliationAdjustment';

class ReconciliationAdjustmentService extends EntityApiService<IReconciliationAdjustment> {
  search = (params?: any, config?: RequestConfig): any => {
    const size = params?.size || 10;
    return this.handleSearchResponse(
      ApiClientService.post(this.getPath('/search'), { ...params, populate: true }, config),
      size,
    );
  };
}

export default new ReconciliationAdjustmentService('/ms-sales/api/reconciliation-adjustment');
