import { ApiClientService, EntityApiService, RequestConfig } from '@dfl/react-security';
import { IUser } from 'modules/security/users/interfaces/IUser';

class AccountService extends EntityApiService<IUser> {
  getMe = (config?: RequestConfig): Promise<IUser> => {
    return this.getOne('me', config);
  };

  save = (params?: any, config?: RequestConfig): Promise<IUser> => {
    return this.handleResponse(ApiClientService.patch(this.getPath(null), params, config));
  };

  updatePassword = (currentPassword: string, newPassword: string) => {
    if (newPassword) {
      return this.handleResponse(
        ApiClientService.post('/ms-auth/api/account/update-password', {
          currentPassword: currentPassword || null,
          newPassword,
        }),
      );
    }

    return Promise.reject(new Error('You must need a _id, lastPassword, password and confirm'));
  };

  updateAvatar = (avatar: string | undefined, userId: string | undefined) => {
    if (userId && avatar) {
      return this.handleResponse(
        ApiClientService.patch(this.getPath('/me'), {
          _id: userId,
          avatar,
        }),
      );
    }
    return Promise.reject(new Error('You must need an userId and an avatar'));
  };
}

export default new AccountService('/ms-auth/api/account');
