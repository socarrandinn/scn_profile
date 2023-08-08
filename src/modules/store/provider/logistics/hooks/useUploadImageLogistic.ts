import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LogisticsUploadService } from 'modules/store/provider/logistics/services';

export const useUploadImageLogistic = (logisticsId: string) => {
  const queryClient = useQueryClient();
  const mutation = useMutation<any, any, any>((files) => {
    return LogisticsUploadService.uploadImage(logisticsId, files)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries([logisticsId]);
    }
  });
  return mutation
};
