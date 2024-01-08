import { useMutation, useQueryClient } from '@tanstack/react-query';
import { CategoryUploadService } from 'modules/inventory/settings/category/services';

export const useUploadImage = (categoryId: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<any, any, any>((files) => {
    return CategoryUploadService.uploadImage(categoryId, files)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries([categoryId]);
    }
  });
  return mutation
};
