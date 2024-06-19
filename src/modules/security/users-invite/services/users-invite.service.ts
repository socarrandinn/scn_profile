import { EntityApiService } from '@dfl/react-security';
import { IUsersInvite } from 'modules/security/users-invite/interfaces';

class UsersInviteService extends EntityApiService<IUsersInvite> {}

export default new UsersInviteService('/ms-auth/api/user-invite');
