import { ApiClientService, EntityApiService } from '@dfl/react-security';

class BrithdayService extends EntityApiService<any> {
  nextBirthday = (): Promise<any[]> => {
    return this.handleResponse(ApiClientService.get(this.getPath('/birthday')));
  };

  newEmployer = (): Promise<any[]> => {
    return this.handleResponse(ApiClientService.get(this.getPath('/new-employees')));
  };
}

export default new BrithdayService('/ms-rrhh/api/common-analytics');
