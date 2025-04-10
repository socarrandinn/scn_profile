import { Chip } from '@mui/material';
import { RoleCellProps } from '../RoleCell/RoleCell';
import { RoleAvatar } from '../RoleAvatar';
import { ReactLink } from '@dfl/react-security';

export const RoleChip = ({ role, bgColor, route }: RoleCellProps) => {
  return (
    <Chip
      avatar={<RoleAvatar role={role} size={24} bgColor={bgColor} />}
      label={
        <ReactLink to={`/security/roles/${route as string}/${(role?.role || role?._id) as string}`} underline={'hover'}>
          {role?.name}
        </ReactLink>
      }
      variant='outlined'
    />
  );
};
