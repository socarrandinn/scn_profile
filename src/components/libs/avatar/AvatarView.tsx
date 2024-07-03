import { Image } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { memo } from 'react';
import { getFullUrl } from 'utils/index';

type AvatarViewProps = {
  thumb: string;
};

const AvatarView = ({ thumb }: AvatarViewProps) => {
  const image = thumb ? getFullUrl(thumb) : undefined;
  return (
    <Avatar sx={{ border: (theme) => `1px solid ${theme.palette.grey[500]}` }} variant='rounded' src={image}>
      <Image />
    </Avatar>
  );
};

export default memo(AvatarView);
