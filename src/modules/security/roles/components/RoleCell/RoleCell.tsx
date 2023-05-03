import { memo } from 'react';
import { Chip, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { ReactLink } from '@dfl/react-security';
import { IRole } from 'modules/security/roles/interfaces';
import { RoleAvatar } from 'modules/security/roles/components/RoleAvatar';
import { SystemRoleBadge } from '../SystemRoleBadge';

type UserCellProps = {
  role: IRole;
};

const RoleCell = ({ role }: UserCellProps) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <SystemRoleBadge isSystemRole={role.isSystemRole}>
          <RoleAvatar role={role} />
        </SystemRoleBadge>
      </ListItemAvatar>

      <ListItemText
        primary={
          <ReactLink to={`${role?._id as string}`} underline={'hover'}>
            {role.name}
          </ReactLink>
        }
      />
    </ListItem>
  );
};
export const RoleChip = ({ role }: UserCellProps) => {
  return (
    <Chip
      avatar={<RoleAvatar role={role} size={24} />}
      label={
        <ReactLink to={`/security/roles/${role?._id as string}`} underline={'hover'}>
          {role?.name}
        </ReactLink>
      }
      variant='outlined'
    />
  );
};

export default memo(RoleCell);
