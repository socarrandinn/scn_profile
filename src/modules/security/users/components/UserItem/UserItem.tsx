import { memo } from 'react';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import { IUser } from 'modules/security/users/interfaces/IUser';
import { ReactLink } from '@dfl/react-security';
import { AvatarMedia } from 'components/AvatarMedia';

type UserItemProps = {
  user: IUser;
  path?: string;
  sx?: any;
};

const UserItem = ({ user, sx, path }: UserItemProps) => {
  const userName = (
    <ReactLink to={path || `/users/${user?._id as string}`} underline={'hover'}>
      {user?.fullName}
    </ReactLink>
  );

  return (
    <ListItem sx={sx}>
      <ListItemAvatar>
        <AvatarMedia avatar={user?.avatar} name={user?.firstName} />
      </ListItemAvatar>
      <ListItemText primary={userName} secondary={user?.email} />
    </ListItem>
  );
};

export default memo(UserItem);
