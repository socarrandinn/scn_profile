import { memo } from 'react'
import { Avatar, AvatarProps } from '@mui/material';
import { imageUrl } from '@dfl/mui-react-common';
import { IImageMedia } from 'modules/common/interfaces';

type AvatarMediaProps = AvatarProps & {
  avatar?: IImageMedia
  name?: string
  hd?: boolean
}

const AvatarMedia = ({ avatar, name, hd, ...props }: AvatarMediaProps) => {
  const url = hd ? avatar?.url : avatar?.thumb;
  return (
        <Avatar alt={name} {...props} src={imageUrl(url as string)} />
  );
}

export default memo(AvatarMedia);
