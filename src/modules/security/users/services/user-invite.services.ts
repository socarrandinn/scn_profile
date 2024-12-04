import { IUser } from 'modules/security/users/interfaces/IUser';
import { ApiClientService, EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IUserInvite, IUserInviteSignUp } from '../interfaces/IUserInvite';
import { SPACE_TYPE } from 'modules/security/users/constants/space-types.constants';
import { FilterFactory, TermFilter } from '@dofleini/query-builder';

class UserInviteService extends EntityApiService<IUser> {
  invite = (payload: IUserInvite, config?: any) => {
    return this.handleResponse(ApiClientService.post(this.getPath(''), payload, config));
  };

  getEmail = (inviteCode: string) => {
    if (inviteCode) {
      return this.handleResponse(ApiClientService.get(this.getPath(`/code/${inviteCode}`)));
    }
    throw new Error('need inviteId');
  };

  signUpInvite = (inviteId: string, payload: IUserInviteSignUp, config?: any) => {
    if (inviteId) {
      return this.handleResponse(ApiClientService.post(this.getPath(`/${inviteId}`), payload, config));
    }
    throw new Error('need inviteId');
  };

  cancel = (id: string, config?: RequestConfig | undefined) => {
    if (id) {
      return this.handleResponse(ApiClientService.patch(this.getPath(`/${id}/cancel`), {}, config));
    }
    throw new Error('need inviteId');
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
    return this.search(searchParams, config);
  };

  searchProviders = (params?: any, config?: RequestConfig): Promise<SearchResponseType<IUser>> => {
    const size = params?.size || 20;
    return this.handleSearchResponse(ApiClientService.post(this.getPath('/providers/search', config?.pathOptions), params, config), size);
  };
}

export default new UserInviteService('/ms-auth/api/user-invite');
