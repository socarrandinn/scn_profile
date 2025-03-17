import { useMutation, useQueryClient } from '@tanstack/react-query';
import { HomeDeliveryPlacesService } from 'modules/sales/settings/home-delivery/services';
import { HOME_DELIVERIES_PLACES_KEY } from 'modules/sales/settings/home-delivery/constants';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { useDistributionCenterDetail } from 'modules/inventory/distribution-centers/context/DistributioncentersContext';

export const useDeleteHomeDelivery = (id: string, onClose: () => void) => {
  const { distributionCenterId } = useDistributionCenterDetail();

  const queryClient = useQueryClient();
  const { t } = useTranslation('homeDelivery');
  return useMutation(() => HomeDeliveryPlacesService.delete(id, { data: { space: distributionCenterId } }), {
    onSuccess: (data) => {
      toast.success(t('successDeleted'));
      onClose?.();
      queryClient.invalidateQueries([HOME_DELIVERIES_PLACES_KEY]);
      queryClient.invalidateQueries([id]);
    },
  });
};
