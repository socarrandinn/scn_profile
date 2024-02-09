import { useMutation } from '@tanstack/react-query';
import { LogisticsUploadService } from 'modules/inventory/provider/logistics/services';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';

export const useUpdateLogisticImage = () => {
  const { logisticId } = useLogisticsDetailContext();
  return useMutation((fileList: File[]) => LogisticsUploadService.uploadAvatar(logisticId as string, fileList[0]));
};
