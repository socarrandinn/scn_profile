import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SupplierUploadService } from 'modules/inventory/provider/supplier/services';

export const useUploadImageProviderProducts = (proveProductsId: string) => {
  const queryClient = useQueryClient();
  return useMutation<any, any, any>(
    (files) => {
      return SupplierUploadService.uploadImage(proveProductsId, files);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries([proveProductsId]);
      },
    },
  );
};
