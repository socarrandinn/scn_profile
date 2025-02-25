import { IMedia } from 'modules/cms/medias/interfaces/IMedia';
import defaultMedia from 'assets/images/media/default.webp';
import { imageUrl } from '@dfl/mui-react-common';
import { useMemo } from 'react';
import MediaActions from '../MediaActions';
import ImageMedia from './ImageMedia';

type Props = {
  media: IMedia;
  Actions?: React.ReactNode;
};

const MediaItem = ({ media }: Props) => {
  const thumb = useMemo(() => {
    if (media?.thumb) return imageUrl(media?.thumb);
    return defaultMedia;
  }, [media?.thumb]);

  return <ImageMedia Action={<MediaActions media={media} />} image={thumb} name={media?.originalName ?? ''} />;
};

export default MediaItem;
