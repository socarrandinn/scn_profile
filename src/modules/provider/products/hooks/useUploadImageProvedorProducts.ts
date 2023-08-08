import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ProvedorProductsUploadService } from 'modules/provider/products/services';

export const useUploadImageProvedorProducts = (proveProductsId: string) => {
  const queryClient = useQueryClient();
  return useMutation<any, any, any>((files) => {
    return ProvedorProductsUploadService.uploadImage(proveProductsId, files)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries([proveProductsId]);
    }
  })
};
