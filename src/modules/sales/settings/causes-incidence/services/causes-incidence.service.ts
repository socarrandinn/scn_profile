import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { ICausesIncidence } from 'modules/sales/settings/causes-incidence/interfaces';

class CausesIncidenceService extends EntityApiService<ICausesIncidence> {
  updateStatus = (payload: Partial<ICausesIncidence>): any => {
    return ApiClientService.patch(this.getPath(`/${payload?._id as string}`), {
      ...payload,
    });
  };
}

export default new CausesIncidenceService('/ms-sales/api/causes-incidences');
