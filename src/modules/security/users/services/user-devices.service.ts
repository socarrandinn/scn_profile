import { ApiClientService, RequestConfig } from '@dfl/react-security';
import { IUserDevices } from 'modules/security/users/interfaces/IUserDevices';

const basePath = '/ms-auth/api/security/user-devices';

type UserDeviceLogout = {
  hash: string;
  ip: string;
};

class UserDeviceService {
  search = (userId?: string, config?: RequestConfig): Promise<IUserDevices[]> => {
    const path = this.getPath();
    return ApiClientService.get(path, config).then(({ data }) => {
      return data;
    });
  };

  logout = (userId: string | undefined, payload: UserDeviceLogout, config: RequestConfig = {}): Promise<any> => {
    const path = this.getPath(userId);
    config.data = payload;
    return ApiClientService.delete(path, config);
  };

  getPath = (userId?: string) => {
    return userId ? `${basePath}/${userId}` : basePath;
  };
}

export default new UserDeviceService();
