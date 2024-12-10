import { ApiClientService, EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { FilterFactory, TermFilter } from '@dofleini/query-builder';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';

class UserService extends EntityApiService<IUser> {
  getMe = (config?: RequestConfig): Promise<IUser> => {
    return this.getOne('me', config);
  };

  getOneUser = (id: string, config?: RequestConfig): Promise<IUser> => {
    return this.handleResponse(ApiClientService.get(this.getPath(`/admin/${id}`, config?.pathOptions), config));
  };

  /**
   * Filters a given set of filters based on a specific space type.
   *
   * @param {any} params - The array of filters to be filtered.
   * @param {SPACE_TYPE} type - The specific space type used for filtering.
   *;
   * @return {any} - The updated array of filters after applying the filtering logic based on the specified space type.
   */
  filterType (params: any, type: SPACE_TYPE): any {
    const roleTypeFilter = new TermFilter({
      field: 'security.roles.type',
      value: type,
    });
    params.filters = FilterFactory.add(params.filters, roleTypeFilter).toQuery();
    return params;
  }

  searchAdmins = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IUser>> => {
    const searchParams = this.filterType({ ...params }, SPACE_TYPE.ROOT);
    const size = params?.size || 20;
    return this.handleSearchResponse(ApiClientService.post(this.getPath('/admin/search', config?.pathOptions), searchParams, config), size);
  };

  searchProviders = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IUser>> => {
    const size = params?.size || 20;
    return this.handleSearchResponse(ApiClientService.post(this.getPath('/providers/search', config?.pathOptions), params, config), size);
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

  updatePassword = (currentPassword: string, newPassword: string) => {
    if (newPassword) {
      return this.handleResponse(
        ApiClientService.post(
          '/ms-auth/api/users/me/update-password',
          {
            currentPassword: currentPassword || null,
            newPassword,
          },
        ),
      );
    }

    return Promise.reject(new Error('You must need a _id, lastPassword, password and confirm'));
  };

  resetPassword = (_id: string | undefined, password: string, confirm: string, requiredChangePassword: boolean) => {
    if (_id && password && confirm) {
      return this.handleResponse(
        ApiClientService.post(this.getPath(`/admin/${_id}/password-reset`), {
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
          ApiClientService.patch(`/ms-auth/api/roles/user/admin/${userId}`, {
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
      return this.handleResponse(ApiClientService.patch(this.getPath(`/admin/${userId}/security`), securityPayload));
    }
    return Promise.reject(new Error('You must need an userId and an securityPayload'));
  };
}

export default new UserService('/ms-auth/api/users');
