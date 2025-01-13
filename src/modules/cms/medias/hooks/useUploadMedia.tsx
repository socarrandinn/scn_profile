import { useMutation } from '@tanstack/react-query';
import { MediaService } from 'modules/cms/medias/services';
import { FieldValues, UseFieldArrayAppend } from 'react-hook-form';

const useUploadMedia = (append: UseFieldArrayAppend<FieldValues, string>) => {
  const {
    mutate,
    isLoading: isUploading,
    error,
  } = useMutation(
    ({ file }: { file: any }) => {
      return MediaService.imageUpload('/upload', file);
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
