import { IPaymentSettings } from '../../interfaces';
import { Typography } from '@mui/material';
import { memo, useMemo } from 'react';

interface ICurrencyCellProps {
  data: IPaymentSettings;
}

const CurrencyCell = ({ data }: ICurrencyCellProps) => {
  const enabledPaymentMethods = useMemo(() => [
    ...(data?.gatewayConfig?.filter(gateway => gateway?.enabled) || []),
    ...(data?.bankConfig?.filter(bank => bank?.enabled) || [])
  ], [data?.gatewayConfig, data?.bankConfig]);

  const transferCurrencies = useMemo(() => (
    enabledPaymentMethods.flatMap(item => item?.currency || [])
  ), [enabledPaymentMethods]);

  const currencies = useMemo(() => (
    transferCurrencies.length > 0 ? transferCurrencies : data?.currency || []
  ), [transferCurrencies, data?.currency]);

  const uniqueCurrencies = useMemo(() => (
    [...new Set(currencies)].sort((a, b) => a.localeCompare(b))
  ), [currencies]);

  const currenciesText = useMemo(() => (
    uniqueCurrencies.join(', ')
  ), [uniqueCurrencies]);

  return (
    <Typography
      sx={{
        fontWeight: 500,
        textAlign: 'end',
        fontFamily: 'monospace'
      }}
    >
      {currenciesText || '—'}
    </Typography>
  );
};

export default memo(CurrencyCell);
