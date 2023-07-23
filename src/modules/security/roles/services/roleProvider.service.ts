import { EntityApiService, ApiClientService } from '@dfl/react-security';
import { IRoleProvider } from 'modules/security/roles/interfaces';

class RoleProvidersService extends EntityApiService<IRoleProvider> {
  addUsers = (roleId: string | undefined, userIds: string[]) => {
    if (roleId && userIds) {
      if (userIds.length) {
        return this.handleResponse(
          ApiClientService.post(this.getPath(`/${roleId}/users`), {
            users: userIds,
          }),
        );
      }
      return Promise.resolve();
    }

    return Promise.reject(new Error('You must need a roleId and a list of users ids'));
  };

  deleteUsers = (roleId: string | undefined, userIds: string[]) => {
    if (roleId && userIds) {
      if (userIds.length) {
        return this.handleResponse(
          ApiClientService.delete(this.getPath(`/${roleId}/users`), {
            data: {
              users: userIds,
            },
          }),
        );
      }
      return Promise.resolve();
    }
    return Promise.reject(new Error('You must need a roleId and a list of users ids'));
  };

  addPermissions = (roleId: string | undefined, permissions: string[]) => {
    if (roleId && permissions) {
      if (permissions.length) {
        return this.handleResponse(
          ApiClientService.patch(this.getPath(`/${roleId}/permission`), {
            permissions,
          }),
        );
      }
      return Promise.resolve();
    }
    return Promise.reject(new Error('You must need a roleId and a list of permissions'));
  };

  updateAvatar = (roleId: string | undefined, avatar: string) => {
    if (roleId && avatar) {
      return this.handleResponse(
        ApiClientService.patch(this.getPath(`/${roleId}`), {
          _id: roleId,
          icon: avatar,
        }),
      );
    }
    return Promise.reject(new Error('You must need a roleId and an avatar'));
  };
}

export default new RoleProvidersService('/ms-auth/api/roles-providers');
