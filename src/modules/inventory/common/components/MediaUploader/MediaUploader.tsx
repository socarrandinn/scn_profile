import React, { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography, Box, ImageListProps, LinearProgress } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import ImageList from 'modules/inventory/common/components/MediaUploader/ImageList';
import { useTranslation } from 'react-i18next';
import { HandlerError } from '@dfl/mui-react-common';
import { IUploadImage } from 'modules/common/interfaces';

type MediaUploaderProps = {
  onAcceptFiles?: (files: File[]) => void;
  uploading?: boolean;
  images?: IUploadImage[];
  imageListProps?: ImageListProps;
  onDeleteImage?: (index: number, image: IUploadImage) => void;
  error?: any;
};

const errorsMap = (error: any) => {
  if (error.statusCode === 413) {
    return {
      title: 'errors:uploadFile.error',
      description: 'errors:uploadFile.toLarge1Mg'
    }
  }
  return error;
}

const MediaUploader = ({
  onAcceptFiles,
  error,
  uploading,
  images,
  onDeleteImage,
  imageListProps,
}: MediaUploaderProps) => {
  const { t } = useTranslation('common');
  const [over, setOver] = useState(false)
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    disabled: uploading,

    onDrop: (acceptedFiles: File[]) => {
      onAcceptFiles?.(acceptedFiles);
      setOver(false)
    },
    onDragOver: () => {
      setOver(true)
    },
    onDragLeave: () => {
      setOver(false)
    },
  });

  return (
        <Box mb={2}>
            <Box mb={2}>
                <div {...getRootProps({ className: 'dropzone' })}>
                    <Box
                        sx={{
                          p: 2,
                          border: '1px dashed #c3b8b8',
                          textAlign: 'center',
                          cursor: 'pointer',
                          transition: 'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                          boxShadow: over ? '4px 6px 22px #00000038' : '0px 0px 0px #0000001A'
                        }}
                    >
                        <input {...getInputProps()} />
                        <CloudUploadIcon color={'secondary'}/>
                        <Typography>{t('mediaUpload.dragAndDropSuggestion')}</Typography>
                    </Box>
                </div>
                {uploading && (
                    <Box>
                        <LinearProgress/>
                    </Box>
                )}
            </Box>
            <HandlerError error={error} mapError={errorsMap}/>
            <ImageList images={images || []} onDeleteImage={onDeleteImage || (() => {
            })} {...imageListProps} size={100}/>
        </Box>
  );
};

export default MediaUploader;
