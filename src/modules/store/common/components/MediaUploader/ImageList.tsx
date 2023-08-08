import React, { memo } from 'react';
import { ImageListProps as ImageListPropsBase, ImageList as ImageListBase } from '@mui/material';
import { IImageMedia } from 'modules/common/interfaces';

import ImageThumb from 'modules/store/common/components/MediaUploader/ImageThumb';

type ImageListProps = Omit<ImageListPropsBase, 'children'> & {
  images: IImageMedia[];
  onDeleteImage: (index: number, image: IImageMedia) => void;
};

const ImageList = ({ images, onDeleteImage, ...imageListProps }: ImageListProps) => {
  return (
    <ImageListBase sx={{ width: '100%', height: 'auto', maxHeight: 450 }} cols={3} rowHeight={164} {...imageListProps}>
      {images.map((item, idx) => (
        <ImageThumb
          image={item}
          key={idx}
          onDeleteClick={() => {
            onDeleteImage(idx, item);
          }}
        />
      ))}
    </ImageListBase>
  );
};

export default memo(ImageList);
