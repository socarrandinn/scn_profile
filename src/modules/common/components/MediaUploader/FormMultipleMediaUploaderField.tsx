import React, { memo } from 'react';
import { FormFieldControl, FormLabel } from '@dfl/mui-react-common';
import { FormHelperText } from '@mui/material';
import { useMultipleUploaderController } from 'modules/common/components/MediaUploader/hooks/useMultipleUploaderController';
import { MultipleMediaUploaderProps } from 'modules/common/components/MediaUploader/interfaces';
import MultipleMediaUploader from 'modules/common/components/MediaUploader/MultipleMediaUploader';

const MediaUploaderField = ({
  value,
  label,
  required,
  error,
  onChange,
  helperText,
  ...props
}: MultipleMediaUploaderProps) => {
  const { uploadError, isLoading, onAcceptFilesHandler, deleteImageHandler } = useMultipleUploaderController(value, onChange)

  return (
        <FormLabel label={label} required={required}>
            <MultipleMediaUploader
                images={value}
                onAcceptFiles={onAcceptFilesHandler}
                uploading={isLoading}
                onDeleteImage={deleteImageHandler}
                error={uploadError}
                {...props}
            />
            {helperText ? <FormHelperText error={error}>{helperText}</FormHelperText> : <></>}
        </FormLabel>
  );
};

export const FormMultipleMediaUploaderField = (props: MultipleMediaUploaderProps) => {
  return <FormFieldControl {...props} Component={MediaUploaderField}/>;
};
