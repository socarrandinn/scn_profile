import { useMutation } from '@tanstack/react-query';
import { LogisticsUploadService } from 'modules/inventory/provider/logistics/services';
import { useLogisticsDetailContext } from 'modules/inventory/provider/logistics/context/LogisticDetail';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useUpdateLogisticImage = () => {
  const { t } = useTranslation('provider');

  const { logisticId } = useLogisticsDetailContext();
  return useMutation((fileList: File[]) => LogisticsUploadService.uploadAvatar(logisticId as string, fileList[0]), {
    onError: () => toast.error(t('failImageUpdate')),
    onSuccess: () => toast.success(t('failImageUpdate')),
  });
};
