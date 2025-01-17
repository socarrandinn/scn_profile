import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';
import { USER_INVITE_STATUS } from '../constants/user-status.enum';

export interface IUserInvite {
  _id?: string;
  email: string;
  security: {
    roles: IRoleSetting[];
  };
  invitedBy?: {
    _id?: string;
    email?: string;
    firstName: string;
    lastName: string;
  };
  status?: USER_INVITE_STATUS;
  type?: ROLE_PROVIDER_TYPE_ENUM | null;
  space?: string | null;
}
