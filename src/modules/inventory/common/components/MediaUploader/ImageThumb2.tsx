import { ImageListItem, ImageListItemBar, LinearProgress } from '@mui/material';
import React, { memo } from 'react';
import { IUploadImage } from 'modules/common/interfaces';
import { IconButton } from '@dfl/mui-react-common';
import { Delete } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

type ImageThumbProps = {
  isLoading?: boolean;
  image: IUploadImage;
  onDeleteClick: () => void;
};

const ImageThumb = ({ isLoading, image: { thumb, isLoading: isUploading, isError }, onDeleteClick }: ImageThumbProps) => {
  const { t } = useTranslation();

  return (
        <ImageListItem>
            <img src={thumb} alt={''} loading='lazy'/>
            <ImageListItemBar
                sx={{
                  background: 'rgba(0,0,0,0)',
                }}
                position='top'
                actionIcon={
                    <>
                        {(isLoading || isUploading) && <LinearProgress/>}
                        {!isLoading && (
                            <IconButton sx={{ color: 'white' }} tooltip={t('common:delete')} onClick={onDeleteClick}>
                                <Delete/>
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
