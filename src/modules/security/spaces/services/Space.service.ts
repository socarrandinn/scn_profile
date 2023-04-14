import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { ISpaceSetting } from 'modules/security/spaces/interfaces';

class SpaceService extends EntityApiService<ISpaceSetting> {
  mySpaces = () => this.handleResponse(ApiClientService.post(this.getPath('/search'), {}));

  changeSpaceToken = (space: string) => {
    return ApiClientService.post(
      '/ms-auth/api/change-space-token',
      {},
      {
        ignoreSpace: true,
        headers: {
          'x-workspace': space,
        },
      },
    );
  };
}

export default new SpaceService('/ms-auth/space');
