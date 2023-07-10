import { IUser } from 'modules/security/users/interfaces/IUser';

export const EMPTY_USER: IUser = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  security: {
    roles: [],
  },
};
