import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { HomeDeliveryPlacesService } from 'modules/sales/settings/home-delivery/services';
import { HOME_DELIVERIES_PLACES_KEY } from 'modules/sales/settings/home-delivery/constants';

const useDeliveryUpdatePriceConfig = (id: string, space?: string) => {
  const { t } = useTranslation(['warehouse', 'errors']);
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, data } = useMutation(
    (global: boolean) => HomeDeliveryPlacesService.updatePriceConfig(id, { global, space }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([HOME_DELIVERIES_PLACES_KEY]);
        toast.success(t('account:successUpdate'));
      },
      onError: () => {
        toast.error(t('generalErrorMessage', { ns: 'errors' }));
      },
    },
  );

  return {
    mutate: mutateAsync,
    isLoading,
    value: data?.data?.global,
  };
};

export default useDeliveryUpdatePriceConfig;
