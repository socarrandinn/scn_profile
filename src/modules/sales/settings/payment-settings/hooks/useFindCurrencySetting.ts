import { useQuery } from '@tanstack/react-query';
import { useTableRequest } from '@dfl/mui-admin-layout';
import { CurrencySettingsService } from 'modules/sales/settings/payment-settings/services';
import { CURRENCY_SETTINGS_KEY } from 'modules/sales/settings/payment-settings/constants';

export const useFindCurrencySetting = () => {
  const { fetch, queryKey } = useTableRequest(CurrencySettingsService.findCurrency);

  return useQuery([CURRENCY_SETTINGS_KEY, queryKey], fetch);
};
