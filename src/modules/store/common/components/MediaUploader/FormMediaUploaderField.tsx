import { IImageMedia } from 'modules/common/interfaces';
import React, { memo, useCallback } from 'react';
import { useUploadImage } from 'components/UploadFiles/useUploadImage';
import { FormFieldControl } from '@dfl/mui-react-common';
import { MediaUploader } from 'modules/store/common/components/MediaUploader/index';
import { COMMON_ERRORS } from 'modules/common/constants';

type FormMediaUploaderFieldProps = {
  value?: IImageMedia[];
  onSuccess?: () => void;
  onChange?: (data: any) => void;
  name: string;
};

const imageFileToMedia = (file: File): IImageMedia => ({
  thumb: URL.createObjectURL(file),
  url: URL.createObjectURL(file),
});

const MediaUploaderField = ({ value, onChange, ...props }: FormMediaUploaderFieldProps) => {
  const { mutate, isLoading, error } = useUploadImage();

  const onAcceptFilesHandler = useCallback(
    (files: File[]) => {
      onChange?.({ target: { value: [...(value || []), ...files.map(imageFileToMedia)] } });
      // eslint-disable-next-line array-callback-return
      const uploadPromises = files.map((file) => {
        mutate(file);
      });
      Promise.allSettled(uploadPromises).then();
    },
    [onChange, value],
  );

  const deleteImageHandler = useCallback(
    (index: number, image: IImageMedia) => {
      onChange?.({ target: { value: value?.filter((_, i) => i !== index) } });
    },
    [onChange, value],
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
  return <FormFieldControl {...props} Component={MediaUploaderField} />;
};

export default memo(FormMediaUploaderField);
