import { useUploadImage } from 'components/UploadFiles/useUploadImage';
import { useCallback, useEffect, useRef } from 'react';
import { imageFileToMedia, transformValue } from 'modules/common/components/MediaUploader/utils/utils';
import { IUploadImage } from 'modules/common/components/MediaUploader/interfaces';

export const useSingleUploaderController = (value?: IUploadImage, onChange?: (data: any) => void) => {
  const { mutate, isLoading, error: uploadError, data, isError } = useUploadImage();
  const currentValue = useRef(value);

  useEffect(() => {
    currentValue.current = value;
  }, [value]);

  useEffect(() => {
    if (data) {
      onChange?.(transformValue(data));
    }
  }, [data, onChange]);

  useEffect(() => {
    if (isError) {
      const newValue = {
        ...currentValue.current,
        isLoading: false,
        isError: true,
      };
      onChange?.(transformValue(newValue));
    }
  }, [isError, onChange]);

  const onAcceptFilesHandler = useCallback(
    (files: File[]) => {
      if (files.length) {
        const newValue = imageFileToMedia(files[0]);
        onChange?.(transformValue(newValue));
        mutate(files);
      }
    },
    [mutate, onChange],
  );

  return {
    onAcceptFilesHandler,
    isLoading,
    uploadError,
  };
};
