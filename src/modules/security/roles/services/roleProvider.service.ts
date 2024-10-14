import { EntityApiService, ApiClientService } from '@dfl/react-security';
import { IRoleProvider } from 'modules/security/roles/interfaces';

class RoleProvidersService extends EntityApiService<IRoleProvider> {
  addUsers = (roleId: string | undefined, userIds: string[], providerId: string | undefined, warehouse?: string) => {
    if (roleId && userIds) {
      if (userIds.length) {
        return this.handleResponse(
          ApiClientService.post(this.getPath(`/${roleId}/users`), {
            users: userIds,
            provider: providerId,
            ...(warehouse && { warehouse }),
          }),
        );
      }
      return Promise.resolve();
    }

    return Promise.reject(new Error('You must need a roleId and a list of users ids'));
  };

  deleteUser = (userId: string, providerId?: string) => {
    if (providerId) {
      return this.handleResponse(ApiClientService.delete(this.getPath(`/provider/${providerId}/user/${userId}`)));
    }

    return Promise.reject(new Error('You must need a providerId'));
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

  getProviderRoles = (type: 'LOGISTIC' | 'PRODUCT' | 'CARRIER' | 'MANUFACTURER') => {
    if (type) {
      return this.handleResponse(
        ApiClientService.post(this.getPath(`/${type}/search`), {
          filters: {},
          search: '',
          page: 0,
          size: 0,
          sort: {},
          projections: {},
          populate: true,
        }),
      );
    }
    return Promise.reject(new Error('You must need a type.'));
  };
}

export default new RoleProvidersService('/ms-auth/api/roles-providers');
