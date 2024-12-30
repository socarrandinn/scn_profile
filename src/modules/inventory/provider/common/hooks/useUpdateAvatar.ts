import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { ProvidersUploadService } from '../../common/services';

export const useUpdateProviderAvatar = (logisticId: string) => {
  const { t } = useTranslation('provider');
  const queryClient = useQueryClient();

  return useMutation((fileList: File[]) => ProvidersUploadService.uploadAvatar(logisticId, fileList[0]), {
    onError: () => toast.error(t('failImageUpdate')),
    onSuccess: () => {
      toast.success(t('successImageUpdate')), queryClient.invalidateQueries([logisticId]);
    },
  });
};
