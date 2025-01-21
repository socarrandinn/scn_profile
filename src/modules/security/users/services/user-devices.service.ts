import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';

type UserDeviceLogout = {
  hash: string;
  ip: string;
};

class UserDeviceService extends EntityApiService<any> {
  getDevice = (userId: string, params: any, config?: RequestConfig) => {
    const path = this.getPath(`/${userId}`);
    return this.handleResponse(ApiClientService.post(path, params, config));
  };

  logout = (userId: string | undefined, payload: UserDeviceLogout, config: RequestConfig = {}): Promise<any> => {
    const path = this.getPath(userId || '');
    config.data = payload;
    return ApiClientService.delete(path, config);
  };

  /* getPath = (userId?: string) => {
    return userId ? `${basePath}/${userId}` : `${basePath}/me`;
  }; */
}

export default new UserDeviceService('/ms-auth/api/security/user-devices');
