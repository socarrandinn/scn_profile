import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IIncidence } from 'modules/sales/incidence/interfaces';
import { INCIDENCE_STATUS_ENUM } from '../constants/incidence-status';

class IncidenceService extends EntityApiService<IIncidence> {
  updateStatus = (id: string, status: INCIDENCE_STATUS_ENUM) => {
    return ApiClientService.patch(this.getPath(`/${id}/status`), {
      status,
    });
  };
}

export default new IncidenceService('/ms-sales/api/incidence');
