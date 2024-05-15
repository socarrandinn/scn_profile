import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IReviews } from 'modules/crm/reviews/interfaces';

class ReviewsService extends EntityApiService<IReviews> {
  searchByEntity = (entityId: string, params: any, config?: any) => {
    return this.handleResponse(ApiClientService.post(this.getPath(`/${entityId}/search`), params, config));
  };

  updateStatus = (reviewId: string, params: { status: string }, config?: any) => {
    return this.handleResponse(ApiClientService.put(this.getPath(`/${reviewId}/status`), params, config));
  };

  searchReportByReviewId = (reviewId: string, params: any, config?: any) => {
    return this.handleResponse(ApiClientService.post(this.getPath(`/${reviewId}/reports/search`), params, config));
  };
}

export default new ReviewsService('/ms-inventory/api/admin/reviews');
