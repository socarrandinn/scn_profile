import { useMutation } from '@tanstack/react-query';
import { CategoryUploadService } from 'modules/inventory/settings/category/services';

export const useUploadImage = (categoryId: string, onSuccess?: () => void) => {
  const mutation = useMutation<any, any, any>(
    (files) => {
      return CategoryUploadService.uploadImage(categoryId, files);
    },
    {
      onSuccess,
    },
  );
  return mutation;
};
