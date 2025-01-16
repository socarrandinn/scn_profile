import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';

export interface IUserInvite {
  email: string;
  security: {
    roles: IRoleSetting[];
  };
  type?: ROLE_PROVIDER_TYPE_ENUM | null;
  space?: string | null;
}
