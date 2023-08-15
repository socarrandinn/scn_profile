import { IUploadImage } from 'modules/common/interfaces';
import React, { memo, useCallback, useEffect, useRef } from 'react';
import { useUploadManyImage } from 'components/UploadFiles/useUploadImage';
import { FormFieldControl } from '@dfl/mui-react-common';
import { MediaUploader } from 'modules/inventory/common/components/MediaUploader/index';
import { COMMON_ERRORS } from 'modules/common/constants';

type FormMediaUploaderFieldProps = {
  value?: IUploadImage[];
  onSuccess?: () => void;
  onChange?: (data: any) => void;
  name: string;
};

const imageFileToMedia = (file: File): IUploadImage => ({
  thumb: URL.createObjectURL(file),
  url: URL.createObjectURL(file),
  isLoading: true
});

const transformValue = (value: any) => ({ target: { value } })

const MediaUploaderField = ({ value, onChange, ...props }: FormMediaUploaderFieldProps) => {
  const { mutate, isLoading, error, data, isError } = useUploadManyImage();
  const currentValue = useRef(value);

  useEffect(() => {
    console.log('update current', value)
    currentValue.current = value;
  }, [value])

  useEffect(() => {
    console.log('data effect', data)
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
    console.log('isError effect', isError)
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
        <div>
            <MediaUploader
                images={value}
                onAcceptFiles={onAcceptFilesHandler}
                uploading={isLoading}
                onDeleteImage={deleteImageHandler}
                error={error}
                errorsMap={COMMON_ERRORS}
                {...props}
            />
        </div>
  );
};

export const FormMediaUploaderField = (props: FormMediaUploaderFieldProps) => {
  return <FormFieldControl {...props} Component={MediaUploaderField}/>;
};

export default memo(FormMediaUploaderField);
