import { memo, useMemo } from 'react';
import { IGatewayConfig } from '../../interfaces';
import { Card, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CurrencySelect } from 'modules/common/components/CurrencySelect';
import { FlexBox, FormCheckBoxField } from '@dfl/mui-react-common';
import { ReactComponent as StripeIcon } from 'assets/icons/stripe.svg';
import { ReactComponent as ElavonIcon } from 'assets/icons/elavon.svg';
import { translateValue } from 'hooks/useTranslateValue';
import { PAYMENT_GATEWAYS_ENUM } from 'modules/sales/common/constants/order-payments';


type Props = {
  data: IGatewayConfig;
  name: string;
  index: number
};

const GatewayCard = ({ data, name }: Props) => {
  const { t } = useTranslation('order');
  const { i18n } = useTranslation('locales');
  const locale = i18n?.language;

  const description = useMemo(() => {
    return translateValue(data?.description, locale);
  }, [locale, data?.description]);

  const gatewayIconMap = useMemo(() => {
    switch (data?.gateway) {
      case PAYMENT_GATEWAYS_ENUM.ELAVON:
        return <ElavonIcon />;
      default:
        return <StripeIcon />;
    }
  }, [data?.gateway]);

  return (
    <Card sx={{ p: '20px', borderRadius: '8px', boxShadow: '0px 5px 10px 5px rgba(0, 0, 0, 0.07)' }}>
      <div className='flex items-center mb-4 justify-between'>
        <FlexBox alignItems={'flex-start'} sx={{ '.MuiFormControlLabel-root': { marginRight: 0 }, maxWidth: '403px' }}>
          <FormCheckBoxField name={`${name}.enabled`} sx={{ paddingY: 0 }} />
          <div>
            <Typography variant='h3' sx={{ mb: 0.5 }}>{t(`payment.gateway.${data?.gateway}`)}</Typography>
            {data?.description && <Typography>{description}</Typography>}
          </div>
        </FlexBox>
        {gatewayIconMap}
      </div>
      <CurrencySelect size='small' name={`${name}.currency`} multiple />
    </Card>
  )
};

export default memo(GatewayCard);
