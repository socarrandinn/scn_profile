import React from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography, Box, ImageListProps, LinearProgress } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import ImageList from 'modules/store/common/components/MediaUploader/ImageList';
import { IImageMedia } from 'modules/common/interfaces';
import { useTranslation } from 'react-i18next';
import { HandlerError } from '@dfl/mui-react-common';

type MediaUploaderProps = {
  onAcceptFiles?: (files: File[]) => void;
  uploading?: boolean;
  images?: IImageMedia[];
  imageListProps?: ImageListProps;
  onDeleteImage?: (index: number, image: IImageMedia) => void;
  error?: any;
  errorsMap?: any;
};

const MediaUploader = ({
  onAcceptFiles,
  error,
  errorsMap,
  uploading,
  images,
  onDeleteImage,
  imageListProps,
}: MediaUploaderProps) => {
  const { t } = useTranslation('common');
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles: File[]) => {
      onAcceptFiles?.(acceptedFiles);
    },
  });

  return (
    <Box>
      <div {...getRootProps({ className: 'dropzone' })}>
        <Box
          sx={{
            p: 2,
            border: '1px dashed #c3b8b8',
            textAlign: 'center',
            cursor: 'pointer',
          }}
        >
          <input {...getInputProps()} />
          <CloudUploadIcon color={'secondary'} />
          <Typography>{t('mediaUpload.dragAndDropSuggestion')}</Typography>
        </Box>
      </div>
      {uploading && (
        <Box>
          <LinearProgress />
        </Box>
      )}
      <HandlerError error={error} errors={errorsMap} />
      <ImageList images={images || []} onDeleteImage={onDeleteImage || (() => {})} {...imageListProps} />
    </Box>
  );
};

export default MediaUploader;
