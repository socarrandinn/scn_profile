import { ImageNotSupportedOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { IMedia } from 'modules/cms/medias/interfaces/IMedia';

type Props = {
  media: IMedia;
};
const MediaItem = ({ media }: Props) => {
  return (
    <Avatar
      variant='rounded'
      sx={{
        height: 156,
        width: '100%',
      }}
      src={'/assets/images/media/default.webp'}
    >
      <ImageNotSupportedOutlined />
    </Avatar>
  );
};

export default MediaItem;
