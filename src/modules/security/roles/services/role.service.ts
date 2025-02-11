import { EntityApiService, ApiClientService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IRole } from 'modules/security/roles/interfaces';

class RoleService extends EntityApiService<IRole> {
  searchRolesByType = (service: string, params?: any, config?: RequestConfig) => {
    return this.handleResponse(ApiClientService.post(`/ms-auth/api/roles/${service}/search`, params, config));
  };

  saveOrUpdateByType = (service: string, params?: any, config?: RequestConfig) => {
    if (params?._id) {
      return this.handleResponse(
        ApiClientService.patch(`/ms-auth/api/roles/${service}/${params?._id}`, params, config),
      );
    }
    return this.handleResponse(ApiClientService.post(`/ms-auth/api/roles/${service}`, params, config));
  };

  deleteByType = (service: string, id: string) => {
    return this.handleResponse(ApiClientService.delete(`/ms-auth/api/roles/${service}/${id}`));
  };

  getOneRoleByType = (service: string, id: string) => {
    return this.handleResponse(ApiClientService.get(`/ms-auth/api/roles/${service}/${id}`));
  };

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

  addPermissionsByType = (service: string, roleId: string | undefined, permissions: string[]) => {
    if (roleId && permissions) {
      if (permissions.length) {
        return this.handleResponse(
          ApiClientService.patch(`/ms-auth/api/roles/${service}/${roleId}/permission`, {
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

  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IRole>> => {
    const searchParams = {
      ...params,
      projections: {
        ...params.projections,
        owner: 0,
        space: 0,
        description: 0,
        isDefaultRole: 0,
        isSpaceOwner: 0,
        isSystemRole: 0,
        permissions: 0,
        type: 0,
        updatedAt: 0,
        createdAt: 0,
        icon: 0,
        id: 0,
      },
    };
    return this.search(searchParams, config);
  };
}

export default new RoleService('/ms-auth/api/roles/admin');
