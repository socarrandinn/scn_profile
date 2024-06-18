import { IUser } from 'modules/security/users/interfaces/IUser';
import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IUserInvite, IUserInviteSignUp } from '../interfaces/IUserInvite';

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
}

export default new UserInviteService('/ms-auth/api/user-invite');
