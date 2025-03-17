import { useTranslation } from 'react-i18next';
import { IGatewayConfig } from '../../interfaces';
import { Typography } from '@mui/material';

const GatewayCell = ({ data }: { data: IGatewayConfig[] }) => {
  const { t } = useTranslation('order');

  const enabledGateways = data?.filter(config => config?.enabled);

  return (
    <Typography sx={{ fontWeight: 500, textAlign: 'end' }}>
      {enabledGateways?.map(config => t(`payment.gateway.${config?.gateway}`)).join(', ')}
    </Typography>
  );
};

export default GatewayCell;
