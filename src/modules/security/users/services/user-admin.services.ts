import { ApiClientService, EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { ROLE_TYPE_ENUM, USER_ROLE_TYPE_MAP } from 'modules/security/roles/constants/role-provider.enum';
import { IUser } from 'modules/security/users/interfaces/IUser';

class UserAdminService extends EntityApiService<IUser> {
  searchRootsUsers = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IUser>> => {
    const size = params?.size || 20;
    return this.handleSearchResponse(
      ApiClientService.post(this.getPath('/root/search', config?.pathOptions), params, config),
      size,
    );
  };

  searchProviderUsers = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IUser>> => {
    const size = params?.size || 20;
    return this.handleSearchResponse(
      ApiClientService.post(this.getPath('/providers/search', config?.pathOptions), params, config),
      size,
    );
  };

  searchClean = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IUser>> => {
    const searchParams = {
      ...params,
      projections: {
        ...params.projections,
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
        id: 0,
      },
    };
    return this.search(searchParams, config);
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

  addRoles = (userId: string | undefined, roles: string[], roleType: ROLE_TYPE_ENUM, space?: string) => {
    const service = USER_ROLE_TYPE_MAP[roleType];
    if (userId && roles) {
      if (roles.length) {
        return this.handleResponse(
          ApiClientService.patch(`/ms-auth/api/users/${service}/${userId}/roles`, {
            roles,
            space,
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
      return this.handleResponse(ApiClientService.patch(this.getPath(`/${userId}/security`), securityPayload));
    }
    return Promise.reject(new Error('You must need an userId and an securityPayload'));
  };
}

export default new UserAdminService('/ms-auth/api/users/admin');
