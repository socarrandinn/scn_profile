import { memo } from 'react';
import { FlexBox } from '@dfl/mui-react-common';
import { ImageListProps as ImageListPropsBase } from '@mui/material/ImageList/ImageList';
import Thumb from 'modules/inventory/common/components/MediaUploader/components/ImageThumb';
import { IUploadImage } from 'modules/inventory/common/components/MediaUploader/interfaces';
import { eventClick } from 'modules/inventory/common/components/MediaUploader/utils/utils';

type ImageListProps = Omit<ImageListPropsBase, 'children'> & {
  images: IUploadImage[];
  onDeleteImage: (index: number, image: IUploadImage) => void;
  onSelect?: (value: any) => void;
  active?: number
  size?: number
};

const ImageList = ({ images, title, active, onSelect, onDeleteImage, size }: ImageListProps) => {
  if (!images?.length) {
    return <></>;
  }

  return (
        <FlexBox flexWrap={'wrap'} gap={2}>
            {images.map((item, index) => (
                <Thumb
                    key={index}
                    size={size}
                    image={item}
                    active={active === index}
                    title={title}
                    onDeleteClick={() => {
                      onDeleteImage(index, item);
                    }}
                    onSelect={(e) => {
                      eventClick(e)
                      onSelect?.(index);
                    }}
                />
            ))}
        </FlexBox>
  );
};

export default memo(ImageList);
