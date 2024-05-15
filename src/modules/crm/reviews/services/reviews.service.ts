import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IReviews } from 'modules/crm/reviews/interfaces';

class AdminReviewsService extends EntityApiService<IReviews> {
  searchByEntity = (params: any, config?: any) => {
    const { entityId } = params;
    return this.handleResponse(ApiClientService.post(this.getPath(`/${entityId as string}/search`), params, config));
  };

  updateStatus = (reviewId: string, status: string, config?: any) => {
    return this.handleResponse(ApiClientService.put(this.getPath(`/${reviewId}/status`), { status }, config));
  };

  searchReportByReviewId = (reviewId: string, params: any, config?: any) => {
    return this.handleResponse(ApiClientService.post(this.getPath(`/${reviewId}/reports/search`), params, config));
  };
}

export default new AdminReviewsService('/ms-inventory/api/admin/reviews');
