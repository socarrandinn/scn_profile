import { useCurrency } from '@dfl/mui-react-common';
import { useTranslateValue } from 'hooks/useTranslateValue';
import { useCallback } from 'react';

export const useApexChartFormatValues = () => {
  const { locale } = useTranslateValue();
  const { currency } = useCurrency();

  const onCurrencyFormat = useCallback(
    (val: number, isCurrency?: boolean) => {
      const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: 'USD',
        currencyDisplay: 'code',
        maximumFractionDigits: 2,
      });
      const value = formatter.format(Number(val)).replace(/USD/, '').trim();
      return isCurrency ? `${value} ${currency}` : `$${value}`;
    },
    [locale, currency],
  );

  return {
    onCurrencyFormat,
  };
};
