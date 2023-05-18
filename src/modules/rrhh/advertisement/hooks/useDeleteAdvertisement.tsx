import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AdvertisementService } from 'modules/rrhh/advertisement/services';
import { ADVERTISEMENTS_LIST_KEY } from 'modules/rrhh/advertisement/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteAdvertisement = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('advertisement');
  return useMutation(() => AdvertisementService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([ADVERTISEMENTS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
