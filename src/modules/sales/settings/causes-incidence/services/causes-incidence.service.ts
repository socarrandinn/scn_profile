import { ApiClientService, EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { ICausesIncidence } from 'modules/sales/settings/causes-incidence/interfaces';

class CausesIncidenceService extends EntityApiService<ICausesIncidence> {
  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<ICausesIncidence>> => {
    const projections = {
      createdAt: 0,
      isPublic: 0,
      description: 0,
      owner: 0,
      space: 0,
      notification: 0,
      sendNotification: 0,
      updatedAt: 0,
    };
    return this.search({ ...params, projections }, config);
  };

  updateStatus = (payload: Partial<ICausesIncidence>): any => {
    return ApiClientService.patch(this.getPath(`/${payload?._id as string}`), {
      ...payload,
    });
  };
}

export default new CausesIncidenceService('/ms-sales/api/causes-incidences');
