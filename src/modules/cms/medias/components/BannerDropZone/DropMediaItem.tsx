import { IMedia } from 'modules/cms/medias/interfaces/IMedia';
import defaultMedia from 'assets/images/media/default.webp';
import { imageUrl } from '@dfl/mui-react-common';
import { useMemo } from 'react';
import ImageMedia from '../MediaGallery/MediaItem/ImageMedia';
import MediaActions from '../MediaGallery/MediaActions';
import { FileActions } from 'components/FileDropZone/RequestServiceActions';
import { IFileProps } from 'components/FileDropZone/FileTypes/types';

type Props = Omit<IFileProps, 'fields'> & {
  media: IMedia;
  index: number;
};

const DropMediaItem = ({ media, remove, index, type }: Props) => {
  const thumb = useMemo(() => {
    if (media?.thumb) return imageUrl(media?.thumb);
    return defaultMedia;
  }, [media?.thumb]);

  return (
    <ImageMedia
      Action={
        <MediaActions
          media={media}
          DeleteAction={<FileActions type={type} remove={remove} index={index} isDelete={true} link={''} />}
        />
      }
      image={thumb}
      name={media?.originalName ?? ''}
    />
  );
};

export default DropMediaItem;
