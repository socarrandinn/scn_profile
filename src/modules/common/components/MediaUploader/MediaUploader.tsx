import React, { useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Typography, Box, LinearProgress } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { useTranslation } from 'react-i18next';
import { ChildrenProps, HandlerError } from '@dfl/mui-react-common';
import { UploadOptions } from 'modules/common/components/MediaUploader/interfaces';

export type MediaUploaderProps = ChildrenProps & {
  onAcceptFiles?: (files: File[]) => void;
  uploading?: boolean;
  error?: any;
  uploadOptions?: UploadOptions
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
  uploadOptions = {},
  children
}: MediaUploaderProps) => {
  const { t } = useTranslation('common');
  const [over, setOver] = useState(false)
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    ...uploadOptions,
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

  const isMultiple = !!uploadOptions?.multiple

  return (
        <div {...getRootProps({ className: 'dropzone' })}>
            <Box mb={2} sx={{
              p: 2,
              mt: 1,
              border: '1px dashed #c3b8b8',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              boxShadow: over ? '4px 6px 22px #00000038' : '0px 0px 0px #0000001A'
            }}>
                <Box mb={2}>
                    <Box
                        sx={{
                          p: 2,
                          textAlign: 'center',
                        }}
                    >
                        <input {...getInputProps()} />
                        <CloudUploadIcon color={'secondary'}/>
                        <Typography>{t('mediaUpload.dragAndDropSuggestion', { count: isMultiple ? 5 : 1 })}</Typography>
                    </Box>

                    {uploading && (
                        <Box>
                            <LinearProgress/>
                        </Box>
                    )}
                </Box>
                <HandlerError error={error} mapError={errorsMap}/>
                {children}
            </Box>
        </div>
  );
};

export default MediaUploader;
