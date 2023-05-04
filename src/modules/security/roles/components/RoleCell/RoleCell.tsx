import { memo, useMemo } from 'react';
import { Chip, ListItem, ListItemText, Box } from '@mui/material';
import { ReactLink } from '@dfl/react-security';
import { IRole } from 'modules/security/roles/interfaces';
import { RoleAvatar } from 'modules/security/roles/components/RoleAvatar';
import FontIconPicker from 'components/libs/FontIconPicker';

type UserCellProps = {
  role: IRole;
};

const RoleCell = ({ role }: UserCellProps) => {
  const icon = useMemo(() => {
    if (role?.icon === 'owner' || role?.icon === 'role4') return 'AssignmentIndIcon';
    if (role?.icon === 'account' || role?.icon === 'role12') return 'AdminPanelSettingsIcon';
    if (role?.icon === 'secure' || role?.icon === 'role9') return 'VerifiedUserIcon';
    return role.icon;
  }, [role?.icon]);

  return (
    <ListItem>
      <Box mr={2}>
        <FontIconPicker readOnly value={icon} key={icon} />
      </Box>

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
