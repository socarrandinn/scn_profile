import { IRole } from 'modules/security/roles/interfaces';
import { Avatar } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import { IRoleSetting } from 'modules/security/users/interfaces/IRoleSetting';

export const RoleAvatar = ({ size = 32, role }: { size?: number; role: IRole | IRoleSetting }) => {
  return (
    <Avatar
      alt={role?.name}
      src={`/images/roles/${role?.icon}.png`}
      sx={{ width: size, height: size, bgcolor: 'primary.dark' }}
    >
      <SecurityIcon fontSize={'small'} />
    </Avatar>
  );
};
