import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IReviews } from 'modules/crm/reviews/interfaces';

class AnalyticReviewsService extends EntityApiService<IReviews> {
  // get report causes
  reviewSummary = (config?: any) => {
    return this.handleResponse(ApiClientService.post(this.getPath('/reviews-summary'), {}, config));
  };
}

export default new AnalyticReviewsService('/ms-inventory/api/reviews/analytics');
