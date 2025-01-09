import { ApiClientService, AuthResult, EntityApiService } from '@dfl/react-security';

class InvitationService extends EntityApiService<any> {
  verify = (key: string | { key: string, [prop: string]: any }): Promise<AuthResult> => {
    let payload = key;
    if (typeof key === 'string') {
      payload = { key };
    }

    return this.handleResponse(ApiClientService.post('/ms-auth/api/user-invite/accept', payload, { ignoreToken: true }));
  };
}

export default new InvitationService('/ms-auth/api');
