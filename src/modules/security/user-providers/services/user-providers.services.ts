import { EntityApiService, RequestConfig, SearchResponseType } from '@dfl/react-security';
import { IUser } from 'modules/security/users/interfaces/IUser';

class UserProvidersService extends EntityApiService<IUser> {
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
}

export default new UserProvidersService('/ms-auth/api/users/providers');
