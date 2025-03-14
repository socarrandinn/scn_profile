import { FlexBox, FormRadioGroupField, useDFLForm } from '@dfl/mui-react-common';
import { Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import { memo, useEffect } from 'react';
import { CURRENCY_TYPE_ENUM } from '../../constants';
import { CurrencySelect } from 'modules/common/components/CurrencySelect';
import { Info } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { ICurrencyConfig } from '../../interfaces';
import SecondaryCurrencyForm from './SecondaryCurrencyForm';
import { UseFormSetValue } from 'react-hook-form';

type Props = {
  setValue: UseFormSetValue<any>
};

const PaymentSettingsForm = ({ setValue }: Props) => {
  const { t } = useTranslation('paymentSettings');
  const { watch } = useDFLForm();
  const primaryCurrency = watch?.('primary');
  const currencies = watch?.('currencies') || [];

  const secondaryCurrencies = currencies?.filter(
    (c: ICurrencyConfig) => c?.enabled && c?.currency !== primaryCurrency
  );

  useEffect(() => {
    const updatedCurrencies = currencies.map((c: ICurrencyConfig) => ({
      ...c,
      isPrimary: c.currency === primaryCurrency,
    }));
    setValue('currencies', updatedCurrencies, { shouldDirty: true });
  }, [primaryCurrency]);

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currency = event.target.value as CURRENCY_TYPE_ENUM;

    const updatedCurrencies = currencies?.map((c: ICurrencyConfig) =>
      c?.currency === currency ? { ...c, enabled: !c?.enabled } : c
    );

    setValue('currencies', updatedCurrencies, { shouldDirty: true });
  };

  return (
    <Grid container spacing={1} alignItems={'center'}>
      <Grid item xs={12}>
        <Typography>{t('currenciesSelect')}</Typography>
        <FormRadioGroupField name={'currencies'}>
          <FlexBox gap={2} alignItems={'center'} justifyContent={'flex-start'}>
            {currencies?.map((currency: ICurrencyConfig) => (
              <FormControlLabel
                key={currency?._id}
                value={currency?.currency}
                name="currencies"
                control={
                  <Checkbox
                    checked={currency?.enabled}
                    onChange={handleCurrencyChange}
                  />
                }
                sx={{ '.MuiSvgIcon-root': { width: 28, height: 28 } }}
                label={t(currency?.currency)}
              />
            ))}
          </FlexBox>
        </FormRadioGroupField>
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ mb: 1 }}>{t('primaryCurrency')}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3.2}>
        <CurrencySelect name='primary' />
      </Grid>
      <Grid item xs={12} sm={6} md={8.7}>
        <div className='flex items-center gap-2'>
          <Info color='success' fontSize='small' />
          <Typography>{t('secondaryHelp')}</Typography>
        </div>
      </Grid>
      {secondaryCurrencies?.length > 0 &&
        <SecondaryCurrencyForm secondaryCurrencies={secondaryCurrencies} />
      }
    </Grid>
  );
};

export default memo(PaymentSettingsForm);
