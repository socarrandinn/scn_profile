import { memo, useMemo } from 'react';
import { IGatewayConfig } from '../../interfaces';
import { Card, Checkbox, FormControlLabel, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { CurrencySelect } from 'modules/common/components/CurrencySelect';
import { FlexBox, FormCheckBoxField, useDFLForm } from '@dfl/mui-react-common';
import { ReactComponent as StripeIcon } from 'assets/icons/stripe.svg';
import { ReactComponent as ElavonIcon } from 'assets/icons/elavon.svg';
import { ReactComponent as TropipayIcon } from 'assets/icons/tropipay.svg';
import { ReactComponent as RedsysIcon } from 'assets/icons/redsys.svg';
import { ReactComponent as DucappIcon } from 'assets/icons/ducapp0.svg';
import { ReactComponent as BillpocketIcon } from 'assets/icons/billpocket.svg';
import { translateValue } from 'hooks/useTranslateValue';
import { PAYMENT_GATEWAYS_ENUM } from 'modules/sales/common/constants/order-payments';

type Props = {
  data: IGatewayConfig;
  name: string;
};
import { Controller } from 'react-hook-form';

const GatewayCard = ({ data, name }: Props) => {
  const { t } = useTranslation('order');
  const { watch, control } = useDFLForm();
  const { i18n } = useTranslation('locales');
  const locale = i18n?.language;

  const currencyValue = watch?.(`${name}.currency`) || [];

  const description = useMemo(() => {
    return translateValue(data?.description, locale);
  }, [locale, data?.description]);

  const gatewayIconMap = useMemo(() => {
    switch (data?.gateway) {
      case PAYMENT_GATEWAYS_ENUM.ELAVON:
        return <ElavonIcon />;
      case PAYMENT_GATEWAYS_ENUM.TROPIPAY:
        return <TropipayIcon />;
      case PAYMENT_GATEWAYS_ENUM.STRIPE:
        return <StripeIcon />;
      case PAYMENT_GATEWAYS_ENUM.REDSYS:
        return <RedsysIcon />;
      case PAYMENT_GATEWAYS_ENUM.DUCAPP:
        return <DucappIcon />;
      case PAYMENT_GATEWAYS_ENUM.BILL_POCKET:
        return <BillpocketIcon />;
      default:
        return <></>;
    }
  }, [data?.gateway]);

  return (
    <Card sx={{ p: '20px', borderRadius: '8px', boxShadow: '0px 5px 10px 5px rgba(0, 0, 0, 0.07)' }}>
      <div className='flex items-center mb-4 justify-between'>
        <FlexBox alignItems={'flex-start'} sx={{ '.MuiFormControlLabel-root': { marginRight: 0 }, maxWidth: '403px' }}>
          <Controller
            name={`${name}.enabled`}
            control={control}
            defaultValue={data?.enabled || false}
            render={({ field }) => (
              <FormControlLabel
                sx={{ '.MuiCheckbox-root': { paddingTop: 0 } }}
                control={
                  <Checkbox
                    {...field}
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                }
                label={undefined}
              />
            )}
          />
          <div>
            <Typography variant='h3'>{t(`payment.gateway.${data?.gateway}`)}</Typography>
            {data?.description && <Typography sx={{ mt: 0.5 }}>{description}</Typography>}
          </div>
        </FlexBox>
        {gatewayIconMap}
      </div>
      <CurrencySelect size='small' name={`${name}.currency`} multiple value={currencyValue} />
    </Card>
  );
};

export default memo(GatewayCard);
