import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';

export interface IUserInviteSignUp {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface IUserInvite {
  email: string;
  roles: string[];
  type: ROLE_PROVIDER_TYPE_ENUM | null;
  store?: string;
  provider: string
  isNationalStore?: boolean
}
