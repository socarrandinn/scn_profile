import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';

export interface IUserInvite {
  email: string;
  security?: {
    roles?: IRoleSetting[];
  };
}

export interface IUserInvitePayload {
  email: string;
  security?: {
    roles?: string[];
  };
}
