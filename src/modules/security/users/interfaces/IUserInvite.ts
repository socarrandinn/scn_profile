import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';

export interface IUserInvite {
  email: string;
  security: {
    roles: IRoleSetting[];
  };
}
