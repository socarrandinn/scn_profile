import { EntityApiService, ApiClientService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IRole } from 'modules/security/roles/interfaces';
import { searchResponseAdapter } from 'utils/index';

class RoleService extends EntityApiService<IRole> {
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

  search = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IRole>> => {
    const size = params?.size || 20;
    return searchResponseAdapter(ApiClientService.post(this.getPath('/search'), params, config), size);
  };
}

export default new RoleService('/ms-auth/api/roles');
