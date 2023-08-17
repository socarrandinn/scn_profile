import ImageList from 'modules/inventory/common/components/MediaUploader/components/ImageList';
import MediaUploader, { MediaUploaderProps } from 'modules/inventory/common/components/MediaUploader/MediaUploader';
import { IUploadImage, UploadOptions } from 'modules/inventory/common/components/MediaUploader/interfaces';
import { ImageListProps } from '@mui/material';
import { useMemo } from 'react';

type MultipleMediaUploaderProps = MediaUploaderProps & {
  images?: IUploadImage[]
  imageListProps?: ImageListProps;
  onDeleteImage?: (index: number, image: IUploadImage) => void;
}
const MultipleMediaUploader = ({
  images,
  onDeleteImage,
  imageListProps,
  uploadOptions,
  ...props
}: MultipleMediaUploaderProps) => {
  return (
        <MediaUploader {...props} >
            <ImageList images={images || []} onDeleteImage={onDeleteImage || (() => {
            })} {...imageListProps} size={100}/>
        </MediaUploader>
  );
};

export default MultipleMediaUploader;
