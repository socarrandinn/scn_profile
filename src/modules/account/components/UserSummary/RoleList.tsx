import { memo } from 'react';
import { List } from '@mui/material';
import RoleItem from 'modules/security/users/components/UserSummary/RoleItem';
import { useRoleId } from 'modules/security/roles/hooks/useRoleId';
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
        <RoleItem key={useRoleId(role)} role={role} roles={roles} {...rest} />
      ))}
    </List>
  );
};

export default memo(RoleList);
