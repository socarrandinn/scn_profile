import { IPaymentSettings } from '../../interfaces';
import { Typography } from '@mui/material';
import { memo } from 'react';

const CurrencyCell = ({ data }: { data: IPaymentSettings }) => {
  const enabledGateways = data?.gatewayConfig?.filter((gateway) => gateway?.enabled) || [];
  const gatewayCurrencies = enabledGateways.flatMap((gateway) => gateway?.currency || []);

  const currencies = gatewayCurrencies.length > 0 ? gatewayCurrencies : data?.currency || [];

  const uniqueCurrencies = [...new Set(currencies)].sort(); // Ordenar alfabéticamente

  return <Typography sx={{ fontWeight: 500, textAlign: 'end' }}>{uniqueCurrencies.join(', ')}</Typography>;
};

export default memo(CurrencyCell);
