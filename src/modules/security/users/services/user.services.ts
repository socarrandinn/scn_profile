import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IUser } from 'modules/security/users/interfaces/IUser';

class UserService extends EntityApiService<IUser> {
  updateonOnBordindCompleted = (_id: string | undefined, onboardingCompleted: boolean, password: string) => {
    if (_id && onboardingCompleted && password) {
      return this.handleResponse(
        ApiClientService.patch(this.getPath(`/${_id}`), {
          _id,
          onboardingCompleted,
          password,
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
          ApiClientService.patch(this.getPath(`/${userId}`), {
            _id: userId,
            security: { roles },
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
}

export default new UserService('/ms-auth/api/users');
