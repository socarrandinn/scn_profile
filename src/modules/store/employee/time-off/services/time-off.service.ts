import { ApiClientService, EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IEmployeeTimeOff } from 'modules/store/employee/common/interfaces/IEmployeeTimeOff';
import { TimeOffStatusEnum } from 'modules/store/employee/time-off/constants/time-off-status.enum';

class TimeOffService extends EntityApiService<IEmployeeTimeOff> {
  updateStatus = (requestId: string, status: TimeOffStatusEnum) => {
    return this.handleResponse(ApiClientService.post(this.getPath(`/${requestId}/status`), {
      status
    }))
  };

  searchPopulate = (params?: any, config?: RequestConfig | undefined): Promise<SearchResponseType<IEmployeeTimeOff>> => {
    params.populate = true;
    return this.search(params, config);
  }

  countPending () {
    return this.handleResponse(ApiClientService.get(this.getPath('/pending-count')))
  }
}

export default new TimeOffService('/ms-rrhh/api/time-off-consumption/request');
