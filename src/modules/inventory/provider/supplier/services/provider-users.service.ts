import { EntityApiService } from '@dfl/react-security';
import { IUser } from 'modules/security/users/interfaces/IUser';

class ProviderUserService extends EntityApiService<IUser> {
  getPath (concat: string | null, options?: { provider: string }): string {
    if (options?.provider) {
      concat = `/${options.provider}${concat as string}`;
    }
    return super.getPath(concat, options);
  }
}

export default new ProviderUserService('/ms-auth/api/users/provider');
