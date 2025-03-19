import { FlexBox } from '@dfl/mui-react-common';
import { Box, Checkbox, Chip, Typography } from '@mui/material';
import { IGatewayConfig } from 'modules/sales/settings/payment-settings/interfaces';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  data: IGatewayConfig[];
};

const GatewayConfigView = ({ data }: Props) => {
  const { t } = useTranslation('paymentSettings');

  return (
    <>
      {data?.map((gateway, index) => (
        <FlexBox key={index} alignItems={'center'}>
          <Checkbox checked={gateway?.enabled} size='small' color='primary' />
          {gateway?.gateway && <Typography>{t(`order:payment.gateway.${gateway?.gateway}`)}</Typography>}
          {gateway?.currency && <Typography sx={{ ml: 0.5 }}>({gateway?.currency?.join(', ')})</Typography>}
        </FlexBox>
      ))}
    </>
  );
};

export default memo(GatewayConfigView);
