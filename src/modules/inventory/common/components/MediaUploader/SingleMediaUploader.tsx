import MediaUploader, { MediaUploaderProps } from 'modules/inventory/common/components/MediaUploader/MediaUploader';
import { IUploadImage, UploadOptions } from 'modules/inventory/common/components/MediaUploader/interfaces';
import { ImageListProps } from '@mui/material';
import { useMemo } from 'react';
import { eventClick } from 'modules/inventory/common/components/MediaUploader/utils/utils';
import Thumb from 'modules/inventory/common/components/MediaUploader/components/ImageThumb';
import Box from '@mui/material/Box';

type SingleMediaUploaderProps = MediaUploaderProps & {
  image?: IUploadImage
  imageProps?: {
    size?: number
  };
}
const SingleMediaUploader = ({
  image,
  imageProps,
  uploadOptions,
  ...props
}: SingleMediaUploaderProps) => {
  const options = useMemo<UploadOptions>(() => {
    return {
      ...uploadOptions,
      multiple: false
    }
  }, [uploadOptions])
  const width = imageProps?.size ? imageProps.size : 200;

  return (
        <MediaUploader {...props} uploadOptions={options}>
            {image && <Box maxWidth={width + 14}><Thumb
                size={width}
                image={image}
                onSelect={(e) => {
                  eventClick(e)
                }}
            /></Box>}
            {/* <ImageList images={images || []} onDeleteImage={onDeleteImage || (() => { */}
            {/* })} {...imageListProps} size={100}/> */}
        </MediaUploader>
  );
};

export default SingleMediaUploader;
