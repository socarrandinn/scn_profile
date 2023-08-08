import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ManufactureService } from 'modules/store/provider/manufacture/services';
import { MANUFACTURES_LIST_KEY } from 'modules/store/provider/manufacture/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

export const useDeleteManufacture = (id: string, onClose: () => void) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('manufacture');
  return useMutation(() => ManufactureService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([MANUFACTURES_LIST_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
