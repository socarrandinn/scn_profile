import { IRole } from 'modules/security/roles/interfaces';
import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';

export const getUseRoleId = (role: IRole | IRoleSetting) => {
  if ('_id' in role) {
    return role?._id;
  }
  return (role as IRoleSetting).role;
};
