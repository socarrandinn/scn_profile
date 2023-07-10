import { ApiClientService, EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IUser } from 'modules/security/users/interfaces/IUser';

class UserService extends EntityApiService<IUser> {
  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IUser>> => {
    params.projections = {
      owner: 0,
      space: 0,
      language: 0,
      'security.roles': 0,
      'security.lock': 0,
      'security.requiredChangePassword': 0,
      'security.verified': 0,
      onboardingCompleted: 0,
      createdAt: 0,
      updatedAt: 0,
      status: 0,
      id: 0
    }
    return this.search(params, config)
  }

  updateonOnBordindCompleted = (_id: string | undefined, onboardingCompleted: boolean, newPassword: string) => {
    if (_id && onboardingCompleted && newPassword) {
      return this.handleResponse(
        ApiClientService.post(this.getPath('/me/update-password'), {
          newPassword,
        }),
      );
    }

    return Promise.reject(new Error('You must need a _id, onboardingCompleted, password and confirm'));
  };

  updatePassword = (_id: string | undefined, currentPassword: string, newPassword: string) => {
    if (_id && currentPassword && newPassword) {
      return this.handleResponse(
        ApiClientService.post(this.getPath(`/${_id}/update-password`), {
          currentPassword,
          newPassword,
        }),
      );
    }

    return Promise.reject(new Error('You must need a _id, lastPassword, password and confirm'));
  };

  resetPassword = (_id: string | undefined, password: string, confirm: string, requiredChangePassword: boolean) => {
    if (_id && password && confirm) {
      return this.handleResponse(
        ApiClientService.post(this.getPath(`/${_id}/password-reset`), {
          password,
          confirm,
          requiredChangePassword,
        }),
      );
    }

    return Promise.reject(new Error('You must need a _id, lastPassword, password and confirm'));
  };

  addRoles = (userId: string | undefined, roles: string[]) => {
    if (userId && roles) {
      if (roles.length) {
        return this.handleResponse(
          ApiClientService.patch(`/ms-auth/api/roles/user/${userId}`, {
            roles,
          }),
        );
      }
      return Promise.resolve();
    }
    return Promise.reject(new Error('You must need an userId and a list of roles'));
  };

  updateAvatar = (avatar: string | undefined, userId: string | undefined) => {
    if (userId && avatar) {
      return this.handleResponse(
        ApiClientService.patch(this.getPath(`/${userId}`), {
          _id: userId,
          avatar,
        }),
      );
    }
    return Promise.reject(new Error('You must need an userId and an avatar'));
  };

  updateSecurity = (userId: string | undefined, securityPayload: any) => {
    if (userId && securityPayload) {
      return this.handleResponse(
        ApiClientService.patch(this.getPath(`/${userId}/security`), securityPayload),
      );
    }
    return Promise.reject(new Error('You must need an userId and an securityPayload'));
  };
}

export default new UserService('/ms-auth/api/users');
