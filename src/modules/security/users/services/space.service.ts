import { EntityApiService, ApiClientService } from '@dfl/react-security';
import { ISpace } from '../interfaces/ISpace';

const _AUTH = '/ms-auth/api';

class SpaceService extends EntityApiService<ISpace> {
  existIdentifier = (identifier: string) => {
    return ApiClientService.post(this.getPath('/exist-identifier'), {
      identifier,
    });
  };

  addUsers = (users: string[], roleId: string) => {
    if (users && roleId) {
      return ApiClientService.post(`${_AUTH}/security/roles/${roleId}/users`, { users });
    }
    return Promise.reject(new Error('You must need a list users, roleID'));
  };

  contractService = (type: string) => {
    return ApiClientService.get('/ms-auth/api/space-contract/last?type=' + type);
  };
}

export default new SpaceService(`${_AUTH}/spaces`);
