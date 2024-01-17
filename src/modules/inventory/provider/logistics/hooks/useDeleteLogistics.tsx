import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LogisticsService } from 'modules/inventory/provider/logistics/services';
import { LOGISTICS_LIST_KEY } from 'modules/inventory/provider/logistics/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const useDeleteLogistics = (id: string, onClose: () => void, onRedirect?: boolean) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { t } = useTranslation('logistics');
  return useMutation(() => LogisticsService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([LOGISTICS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
      if (onRedirect) {
        navigate('/inventory/settings/logistics');
      }
    },
  });
};
