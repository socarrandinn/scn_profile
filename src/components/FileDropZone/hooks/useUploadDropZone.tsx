import { useMutation } from '@tanstack/react-query';
import { FieldValues, UseFieldArrayAppend } from 'react-hook-form';
import { DropZoneUpload } from '../services';
import { TYPE_DROP } from '../FileDropZone';

const useUploadDropZone = (append: UseFieldArrayAppend<FieldValues, string>) => {
  const {
    mutate,
    isLoading: isUploading,
    error,
  } = useMutation(
    ({ file, type }: { file: any; type: string }) => {
      if (type === TYPE_DROP.FILE) {
        return DropZoneUpload.uploadFile('/document', file);
      }
      return DropZoneUpload.uploadFile('/', file);
    },
    {
      onSuccess: (data: any, values: any) => {
        if (values?.type === 'FILE') {
          append(data);
          return;
        }
        append(data);
      },
    },
  );

  const onChange = async ({ file, type }: { file: any; type: string }) => {
    mutate({ file, type });
  };

  return { onChange, isUploading, error };
};

export default useUploadDropZone;
