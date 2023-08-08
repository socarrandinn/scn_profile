import { ImageListItem, ImageListItemBar } from '@mui/material';
import React, { memo } from 'react';
import { IImageMedia } from 'modules/common/interfaces';
import { IconButton, LoadingButton } from '@dfl/mui-react-common';
import { Delete } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

type ImageThumbProps = {
  isLoading?: boolean;
  image: IImageMedia;
  onDeleteClick: () => void;
};

const ImageThumb = ({ isLoading, image: { thumb }, onDeleteClick }: ImageThumbProps) => {
  const { t } = useTranslation();

  return (
    <ImageListItem>
      <img src={thumb} alt={''} loading='lazy' />
      <ImageListItemBar
        sx={{
          background: 'rgba(0,0,0,0)',
        }}
        position='top'
        actionIcon={
          <>
            {isLoading && <LoadingButton size='small' loading={true} variant='text' />}
            {!isLoading && (
              <IconButton sx={{ color: 'white' }} tooltip={t('common:delete')} onClick={onDeleteClick}>
                <Delete />
              </IconButton>
            )}
          </>
        }
        actionPosition='right'
      />
    </ImageListItem>
  );
};

export default memo(ImageThumb);
