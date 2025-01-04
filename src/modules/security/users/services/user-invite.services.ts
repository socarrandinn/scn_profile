import { IUser } from 'modules/security/users/interfaces/IUser';
import { ApiClientService, EntityApiService } from '@dfl/react-security';
import { IUserInvite } from '../interfaces/IUserInvite';

class UserInviteService extends EntityApiService<IUser> {
  invite = (payload: IUserInvite, config?: any) => {
    const transformedPayload = {
      ...payload,
      security: {
        roles: payload.security.roles.map(r => r._id ?? r),
      },
    };
    return this.handleResponse(ApiClientService.post(this.getPath('/invite'), transformedPayload, config));
  };
}

export default new UserInviteService('/ms-auth/api/users/admin');
