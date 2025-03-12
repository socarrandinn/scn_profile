import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { CurrencySettingsService } from 'modules/sales/settings/payment-settings/services';
import { PAYMENT_SETTINGS_LIST_KEY } from 'modules/sales/settings/payment-settings/constants';

export const useFindPaymentSettings = () => {
  const { fetch, queryKey } = useTableRequest(CurrencySettingsService.search);

  return useQuery([PAYMENT_SETTINGS_LIST_KEY, queryKey], fetch);
};
