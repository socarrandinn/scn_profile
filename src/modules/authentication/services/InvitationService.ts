import { ApiClientService, AuthResult, EntityApiService, RequestConfig } from '@dfl/react-security';
import { INVITATION_STATUS } from 'modules/security/users/constants/user-status.enum';
import { IUserInvite } from 'modules/security/users/interfaces/IUserInvite';

class InvitationService extends EntityApiService<any> {
  verify = (key: string | { key: string; [prop: string]: any }): Promise<AuthResult> => {
    let payload = key;
    if (typeof key === 'string') {
      payload = { key };
    }

    return this.handleResponse(
      ApiClientService.post('/ms-auth/api/users/invitations/accept', payload, { ignoreToken: true }),
    );
  };

  actionInvitation = (
    id: string,
    action: INVITATION_STATUS,
    params: any,
    config?: RequestConfig,
  ): Promise<IUserInvite> => {
    return this.handleResponse(
      ApiClientService.patch(this.getPath(`/users/invitations/${id}/${action}`), params, config),
    );
  };
}

export default new InvitationService('/ms-auth/api');
