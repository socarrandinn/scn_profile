import { IUploadImage } from 'modules/common/interfaces';
import React, { memo, useCallback, useEffect, useRef } from 'react';
import { useUploadManyImage } from 'components/UploadFiles/useUploadImage';
import { FormFieldControl, FormLabel } from '@dfl/mui-react-common';
import { MediaUploader } from 'modules/inventory/common/components/MediaUploader/index';
import { FormHelperText } from '@mui/material';

type FormMediaUploaderFieldProps = {
  value?: IUploadImage[];
  onSuccess?: () => void;
  onChange?: (data: any) => void;
  name: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  required?: boolean;
};

const imageFileToMedia = (file: File): IUploadImage => ({
  thumb: URL.createObjectURL(file),
  url: URL.createObjectURL(file),
  isLoading: true
});

const transformValue = (value: any) => ({ target: { value } })

const MediaUploaderField = ({ value, label, required, error, onChange, helperText, ...props }: FormMediaUploaderFieldProps) => {
  const { mutate, isLoading, error: uploadError, data, isError } = useUploadManyImage();
  const currentValue = useRef(value);

  useEffect(() => {
    currentValue.current = value;
  }, [value])

  useEffect(() => {
    let index = 0;
    if (data) {
      const newValue = currentValue.current?.map(item => {
        if (item.isLoading) {
          const image = data[index];
          const isError = !!image.error;
          index++;
          return {
            ...(isError ? item : image),
            isLoading: false,
            isError
          }
        }
        return item;
      })
      onChange?.(transformValue(newValue))
    }
  }, [data, onChange])

  useEffect(() => {
    if (isError) {
      const newValue = currentValue.current?.map(item => {
        if (item.isLoading) {
          return {
            ...item,
            isLoading: false,
            isError: true
          }
        }
        return item;
      })
      onChange?.(transformValue(newValue))
    }
  }, [isError, onChange])

  const onAcceptFilesHandler = useCallback(
    (files: File[]) => {
      const newFiles = files.map(imageFileToMedia);
      const newValue = [...(currentValue.current || []), ...newFiles];
      onChange?.(transformValue(newValue))
      mutate(files);
    },
    [onChange],
  );

  const deleteImageHandler = useCallback(
    (index: number) => {
      const newValue = value?.filter((_, i) => i !== index)
      onChange?.(transformValue(newValue))
    },
    [value, onChange],
  );

  return (
        <FormLabel label={label} required={required}>
            <MediaUploader
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

export const FormMediaUploaderField = (props: FormMediaUploaderFieldProps) => {
  return <FormFieldControl {...props} Component={MediaUploaderField}/>;
};

export default memo(FormMediaUploaderField);
