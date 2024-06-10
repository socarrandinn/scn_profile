import { ReactLink } from '@dfl/react-security';
import { Person } from '@mui/icons-material';
import { ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { AvatarMedia } from 'components/AvatarMedia';
import { IImageMedia } from 'modules/common/interfaces';
import { memo } from 'react';

type ClientCellProps = {
  showAvatar?: boolean;
  showEmail?: boolean;
  hiddenLink?: boolean;
  link?: string;
  name: string;
  email?: string;
  variant?: 'square' | 'circular' | 'rounded';
  image?: IImageMedia;
};

const ClientCell = ({
  name,
  image,
  variant = 'circular',
  showAvatar,
  showEmail,
  email,
  hiddenLink,
  link,
}: ClientCellProps) => {
  const Name = !hiddenLink ? (
    <ReactLink to={link as string} underline={'hover'}>
      {name}
    </ReactLink>
  ) : (
    name
  );

  return (
    <ListItem
      sx={{
        padding: 0,
        margin: 0,
      }}
    >
      {showAvatar && (
        <ListItemAvatar>
          <AvatarMedia name={name} avatar={image} variant={variant}>
            <Person fontSize='small' />
          </AvatarMedia>
        </ListItemAvatar>
      )}
      <ListItemText primary={Name} {...(showEmail ? { secondary: email } : {})} />
    </ListItem>
  );
};

export default memo(ClientCell);
