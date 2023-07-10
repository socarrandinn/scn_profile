import { useMutation } from '@tanstack/react-query';
import { CommonUploadService } from 'modules/common/service';

export const useUploadImage = (onSuccess?: () => void) => {
  const mutation = useMutation<any, any, any>((files) => {
    return CommonUploadService.upload('', files)
  }, {
    onSuccess
  });
  return mutation
};
