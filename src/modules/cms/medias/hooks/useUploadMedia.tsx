import { useMutation } from '@tanstack/react-query';
import { MediaService } from 'modules/cms/medias/services';
import { IImageOption } from 'modules/common/interfaces';

import { FieldValues, UseFieldArrayAppend } from 'react-hook-form';

const useUploadMedia = (append: UseFieldArrayAppend<FieldValues, string>) => {
  const {
    mutate,
    isLoading: isUploading,
    error,
  } = useMutation(
    ({ file, imageOption }: { file: any; imageOption: IImageOption }) => {
      return MediaService.imageUpload('/upload', file, imageOption);
    },
    {
      onSuccess: (data: any) => {
        append(data);
      },
    },
  );

  const onChange = async (values: { file: any; imageOption: IImageOption }) => {
    mutate(values);
  };

  return { onChange, isUploading, error };
};

export default useUploadMedia;
