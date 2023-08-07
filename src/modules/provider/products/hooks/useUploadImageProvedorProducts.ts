import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProvedorProductsUploadService } from 'modules/provider/products/services';

export const useUploadImageProvedorProducts = (proveProductsId: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<any, any, any>((files) => {
    return ProvedorProductsUploadService.uploadImage(proveProductsId, files)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries([proveProductsId]);
    }
  });
  return mutation
};
