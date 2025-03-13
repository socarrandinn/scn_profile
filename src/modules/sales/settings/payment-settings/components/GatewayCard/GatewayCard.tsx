import { memo } from 'react';
import { IGatewayConfig } from '../../interfaces';
import { Card, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CurrencySelect } from 'modules/common/components/CurrencySelect';
import { FlexBox, FormCheckBoxField, useDFLForm } from '@dfl/mui-react-common';
import { ReactComponent as StripeIcon } from 'assets/icons/stripe.svg';


type Props = {
  data: IGatewayConfig;
  name: string;
  index: number
};

const GatewayCard = ({ data, name, index }: Props) => {
  const { t } = useTranslation('order');
  const { watch } = useDFLForm();
  const gatewayConfig = watch?.('gatewayConfig');

  return (
    <Card sx={{ p: '20px', borderRadius: '8px', boxShadow: '0px 5px 10px 5px rgba(0, 0, 0, 0.07)' }}>
      <div className='flex items-center mb-4 justify-between'>
        <FlexBox alignItems={'flex-start'} sx={{ '.MuiFormControlLabel-root': { marginRight: 0 }, maxWidth: '403px' }}>
          <FormCheckBoxField name={`${name}.enabled`} sx={{ paddingY: 0 }} />
          <div>
            <Typography variant='h3' sx={{ mb: 0.5 }}>{t(`payment.gateway.${data?.gateway}`)}</Typography>
            {/* <Typography>Permite procesar transacciones con tarjetas y métodos digitales en todo el mundo.</Typography> */} // TODO: add description when backend support
          </div>
        </FlexBox>
        <StripeIcon />
      </div>
      <CurrencySelect size='small' name={`${name}.currency`} multiple />
    </Card>
  )
};

export default memo(GatewayCard);
