import { useQuery } from '@tanstack/react-query';
import { CurrencySettingsService } from 'modules/sales/settings/payment-settings/services';
import { PAYMENT_SETTINGS_ONE_KEY } from 'modules/sales/settings/payment-settings/constants';
import { useCallback } from 'react';
import { ICurrencySettings } from 'modules/sales/settings/payment-settings/interfaces';

export const useFindOnePaymentSettings = (id: string | null) => {
  const fetch = useCallback(() => CurrencySettingsService.getOne(id as string), [id]);
  return useQuery<ICurrencySettings>([id, PAYMENT_SETTINGS_ONE_KEY], fetch, { enabled: !!id });
};
