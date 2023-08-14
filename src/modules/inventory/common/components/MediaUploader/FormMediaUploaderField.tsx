import { IImageMedia, IUploadImage } from 'modules/common/interfaces';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useUploadImage } from 'components/UploadFiles/useUploadImage';
import { FormFieldControl } from '@dfl/mui-react-common';
import { MediaUploader } from 'modules/inventory/common/components/MediaUploader/index';
import { COMMON_ERRORS } from 'modules/common/constants';

type FormMediaUploaderFieldProps = {
  value?: IImageMedia[];
  onSuccess?: () => void;
  onChange?: (data: any) => void;
  name: string;
};

const imageFileToMedia = (file: File): IUploadImage => ({
  thumb: URL.createObjectURL(file),
  url: URL.createObjectURL(file),
  isLoading: true
});

const MediaUploaderField = ({ value, onChange, ...props }: FormMediaUploaderFieldProps) => {
  const { mutate, isLoading, error, data, isError } = useUploadImage();
  const [internalValue, setInternalValue] = useState<IUploadImage[]>(value as IUploadImage[]);

  useEffect(() => {
    console.log('value effect', value)
    setInternalValue(value as IUploadImage[])
  }, [value]);

  useEffect(() => {
    console.log('data effect', data)
  }, [data])

  useEffect(() => {
    console.log('isError effect', isError)
    if (isError) {
      setInternalValue(prevState => {
        return prevState?.map(item => {
          if (item.isLoading) {
            return {
              ...item,
              isLoading: false,
              isError: true
            }
          }
          return item;
        })
      })
    }
  }, [isError])

  const onAcceptFilesHandler = useCallback(
    (files: File[]) => {
      const newFiles = files.map(imageFileToMedia);

      setInternalValue(prevState => {
        return [...(prevState || []), ...newFiles];
      });
      mutate(files);
    },
    [],
  );

  const deleteImageHandler = useCallback(
    (index: number, image: IImageMedia) => {
      setInternalValue(prevState => {
        return prevState?.filter((_, i) => i !== index)
      })
    },
    [onChange],
  );

  return (
        <div>
            <MediaUploader
                images={internalValue}
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
