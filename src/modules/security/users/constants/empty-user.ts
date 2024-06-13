import { ROLE_PROVIDER_TYPE_ENUM } from 'modules/security/roles/constants/role-provider.enum';
import { IUser, USER_TYPE } from 'modules/security/users/interfaces/IUser';

export const EMPTY_USER: IUser = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  security: {
    roles: [],
  },
  userType: USER_TYPE.SYSTEM,
  type: ROLE_PROVIDER_TYPE_ENUM.LOGISTIC,
};
