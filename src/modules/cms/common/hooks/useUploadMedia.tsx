import { useMutation } from '@tanstack/react-query';
import { MediaUploadService } from 'modules/cms/common/services';
import { FieldValues, UseFieldArrayAppend } from 'react-hook-form';

const useUploadMedia = (append: UseFieldArrayAppend<FieldValues, string>) => {
  const {
    mutate,
    isLoading: isUploading,
    error,
  } = useMutation(
    ({ file }: { file: any }) => {
      return MediaUploadService.imageUpload('/upload', file);
    },
    {
      onSuccess: (data: any) => {
        append(data);
      },
    },
  );

  const onChange = async ({ file }: { file: any }) => {
    mutate({ file });
  };

  return { onChange, isUploading, error };
};

export default useUploadMedia;
