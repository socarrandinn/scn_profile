import MediaUploader, { MediaUploaderProps } from 'modules/common/components/MediaUploader/MediaUploader';
import { IUploadImage, UploadOptions } from 'modules/common/components/MediaUploader/interfaces';
import { useMemo } from 'react';
import { eventClick } from 'modules/common/components/MediaUploader/utils/utils';
import Thumb from 'modules/common/components/MediaUploader/components/ImageThumb';
import { FlexBox } from '@dfl/mui-react-common';

type SingleMediaUploaderProps = MediaUploaderProps & {
  image?: IUploadImage;
  imageProps?: {
    size?: number;
  };
};
const SingleMediaUploader = ({ image, imageProps, uploadOptions, ...props }: SingleMediaUploaderProps) => {
  const options = useMemo<UploadOptions>(() => {
    return {
      ...uploadOptions,
      multiple: false,
    };
  }, [uploadOptions]);
  const width = imageProps?.size ? imageProps.size : 200;

  return (
    <MediaUploader {...props} uploadOptions={options}>
      {image && (
        <FlexBox justifyContent={'center'}>
          <Thumb
            size={width}
            image={image}
            onSelect={(e) => {
              eventClick(e);
            }}
          />
        </FlexBox>
      )}
      {/* <ImageList images={images || []} onDeleteImage={onDeleteImage || (() => { */}
      {/* })} {...imageListProps} size={100}/> */}
    </MediaUploader>
  );
};

export default SingleMediaUploader;
