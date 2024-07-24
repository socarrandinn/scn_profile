import { memo } from 'react';
import { List } from '@mui/material';
import RoleItem from './RoleItem';
import { getUseRoleId } from 'modules/security/roles/utils/getUseRoleId';
import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';

type RoleListProps = {
  roles: IRoleSetting[];
  userId: string;
  readOnly?: boolean;
};

const RoleList = ({ roles, ...rest }: RoleListProps) => {
  return (
    <List dense>
      {roles?.map((role) => (
        <RoleItem key={getUseRoleId(role)} role={role} roles={roles} {...rest} />
      ))}
    </List>
  );
};

export default memo(RoleList);
