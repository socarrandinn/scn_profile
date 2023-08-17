import ImageList from 'modules/common/components/MediaUploader/components/ImageList';
import MediaUploader, { MediaUploaderProps } from 'modules/common/components/MediaUploader/MediaUploader';
import { IUploadImage } from 'modules/common/components/MediaUploader/interfaces';
import { ImageListProps } from '@mui/material';

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
