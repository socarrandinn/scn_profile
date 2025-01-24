import { PROVIDER_TYPE_ENUM } from 'modules/inventory/provider/common/constants';
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
  type: PROVIDER_TYPE_ENUM.LOGISTIC,
};
