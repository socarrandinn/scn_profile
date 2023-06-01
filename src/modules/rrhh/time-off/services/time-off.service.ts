import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IEmployeeTimeOff } from 'modules/rrhh/employee/common/interfaces/IEmployeeTimeOff';

class TimeOffService extends EntityApiService<IEmployeeTimeOff> {
  updateStatus = (_params: any) => {
  };

  searchPopulate = (params?: any, config?: RequestConfig | undefined): Promise<SearchResponseType<IEmployeeTimeOff>> => {
    params.populate = true;
    return this.search(params, config);
  }
}

export default new TimeOffService('/ms-rrhh/api/time-off-consumption/request');
