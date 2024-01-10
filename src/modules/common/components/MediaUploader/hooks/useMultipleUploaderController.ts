import { useUploadManyImage } from 'components/UploadFiles/useUploadImage';
import { useCallback, useEffect, useRef } from 'react';
import { imageFileToMedia, transformValue } from 'modules/common/components/MediaUploader/utils/utils';
import { IUploadImage } from 'modules/common/components/MediaUploader/interfaces';

export const useMultipleUploaderController = (value?: IUploadImage[], onChange?: (data: any) => void) => {
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

  return {
    deleteImageHandler,
    onAcceptFilesHandler,
    isLoading,
    uploadError
  }
};
