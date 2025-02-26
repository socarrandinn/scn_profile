import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import { HomeDeliveryPlacesService } from 'modules/sales/settings/home-delivery/services';
import {
  HOME_DELIVERIES_PLACES_KEY,
} from 'modules/sales/settings/home-delivery/constants';
import { DELIVERY_SERVICE, IDelivery } from '../../home-delivery/interfaces';
import { EXPRESS_DELIVERIES_LIST_KEY } from '../../express-delivery/constants';

const useDeliveryUpdatePriceConfig = (apiPath: DELIVERY_SERVICE, defaultValues: IDelivery) => {
  const { t } = useTranslation(['warehouse', 'errors']);
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading, data } = useMutation(
    (global: boolean) => HomeDeliveryPlacesService.updatePriceConfig(apiPath, { ...defaultValues, global }),
    {
      onSuccess: () => {
        apiPath === DELIVERY_SERVICE.HOME && queryClient.invalidateQueries([HOME_DELIVERIES_PLACES_KEY]);
        apiPath === DELIVERY_SERVICE.EXPRESS && queryClient.invalidateQueries([EXPRESS_DELIVERIES_LIST_KEY]);
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
    value: data?.data?.global
  };
};

export default useDeliveryUpdatePriceConfig;
