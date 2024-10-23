import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DistributionCentersService } from 'modules/inventory/distribution-centers/services';
import { DISTRIBUTION_CENTERS_LIST_KEY } from 'modules/inventory/distribution-centers/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

export const useDeleteDistributionCenters = (id: string, onClose: () => void, onRedirect?: boolean) => {
  const queryClient = useQueryClient();
  const { t } = useTranslation('warehouse');
  const navigate = useNavigate();
  return useMutation(() => DistributionCentersService.delete(id), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([DISTRIBUTION_CENTERS_LIST_KEY]);
      queryClient.invalidateQueries([id]);
      if (onRedirect) {
        navigate('/inventory/distribution-centers');
      }
    },
  });
};
