import { ROLE_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';

export interface IRoleSetting {
  _id?: string;
  role: string;
  space: string;
  name: string;
  icon: string;
  type?: ROLE_TYPE_ENUM;
  provider?: string;
}
