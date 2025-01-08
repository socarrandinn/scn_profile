import { IRole } from 'modules/security/roles/interfaces';
import { Avatar } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';

export const RoleAvatar = ({
  size = 32,
  role,
  bgColor,
}: {
  size?: number;
  role: IRole | IRoleSetting;
  bgColor?: 'error' | 'warning' | 'info' | 'primary' | undefined;
}) => {
  return (
    <Avatar
      alt={role?.name}
      src={`/images/roles/${role?.icon}.png`}
      sx={{ width: size, height: size, bgcolor: `${bgColor || 'error'}.main` }}
    >
      <SecurityIcon fontSize={'small'} />
    </Avatar>
  );
};
