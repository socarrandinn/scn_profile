import { IImageMedia } from 'modules/common/interfaces';
import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';

export interface IClients {
  _id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  createdAt?: Date;
  active?: boolean;
  fullName?: string;
  avatar?: IImageMedia;
  security?: {
    roles?: IRoleSetting[];
    lock?: boolean;
    verified?: boolean;
    password?: string;
    lastPassword?: string;
  };
}
