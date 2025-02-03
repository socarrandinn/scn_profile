import { useMutation } from '@tanstack/react-query';
import { CategoryUploadService } from '../services';
import { useCategoryDetail } from '../context/CategoryDetailContext';

export const useUploadCategoryImage = (onSuccess?: () => void) => {
  const { categoryId } = useCategoryDetail();
  const mutation = useMutation<any, any, any>(
    (files) => {
      return CategoryUploadService.uploadImage(categoryId as string, files);
    },
    {
      onSuccess,
    },
  );
  return mutation;
};
