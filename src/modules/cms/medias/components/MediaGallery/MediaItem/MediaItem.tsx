import { ImageNotSupportedOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { IMedia } from 'modules/cms/medias/interfaces/IMedia';
import defaultMedia from 'assets/images/media/default.webp';
import { imageUrl } from '@dfl/mui-react-common';
import { useMemo } from 'react';

type Props = {
  media: IMedia;
};
const MediaItem = ({ media }: Props) => {
  const thumb = useMemo(() => {
    if (media?.thumb) return imageUrl(media?.thumb);
    return defaultMedia;
  }, [media?.thumb]);
  return (
    <Avatar
      variant='rounded'
      sx={(theme) => ({
        height: 156,
        width: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
        backgroundColor: theme.palette.background.default,
      })}
      src={thumb}
    >
      <ImageNotSupportedOutlined />
    </Avatar>
  );
};

export default MediaItem;
