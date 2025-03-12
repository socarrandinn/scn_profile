import { FlexBox, FormRadioGroupField, FormTextField, LoadingButton, useDFLForm } from '@dfl/mui-react-common';
import { Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { CURRENCY_TYPE_ENUM, currencyTypeEnumValues } from '../../constants';
import { CurrencySelect } from 'modules/common/components/CurrencySelect';
import { Info, LegendToggleTwoTone } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { FormCurrencyRate } from '../FormCurrencyRate';

const PaymentSettingsForm = () => {
  const { t } = useTranslation('paymentSettings');
  const { watch, control, setValue } = useDFLForm();
  const primaryCurrency = watch?.('primaryCurrency');
  const activeCurrencies = watch?.('activeCurrencies') || [];

  const [selectedCurrencies, setSelectedCurrencies] = useState<CURRENCY_TYPE_ENUM[]>(activeCurrencies || []);

  useEffect(() => {
    setSelectedCurrencies(activeCurrencies || []);
  }, [activeCurrencies]);

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currency = event.target.value as CURRENCY_TYPE_ENUM;
    let updatedCurrencies: CURRENCY_TYPE_ENUM[];

    if (event.target.checked) {
      updatedCurrencies = [...selectedCurrencies, currency];
    } else {
      updatedCurrencies = selectedCurrencies.filter((c) => c !== currency);
    }
    setSelectedCurrencies(updatedCurrencies);
    setValue?.('activeCurrencies', updatedCurrencies);
  };

  const secondaryCurrencies = selectedCurrencies.filter((currency) => currency !== primaryCurrency);

  return (
    <Grid container spacing={1} alignItems={'center'}>
      <Grid item xs={12}>
        <Typography>{t('currenciesSelect')}</Typography>
        <FormRadioGroupField name={'activeCurrencies'}>
          <FlexBox gap={2} alignItems={'center'} justifyContent={'flex-start'}>
            {currencyTypeEnumValues?.map((currency) => (
              <FormControlLabel
                key={currency}
                value={currency}
                name="activeCurrencies"
                control={
                  <Checkbox
                    checked={selectedCurrencies.includes(currency)}
                    onChange={handleCurrencyChange}
                  />
                }
                sx={{ '.MuiSvgIcon-root': { width: 28, height: 28 } }}
                label={t(currency)}
              />
            ))}
          </FlexBox>
        </FormRadioGroupField>
      </Grid>
      <Grid item xs={12}>
        <Typography sx={{ mb: 1 }}>{t('primaryCurrency')}</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3.2}>
        <CurrencySelect name='primaryCurrency' />
      </Grid>
      <Grid item xs={12} sm={6} md={8.7}>
        <div className='flex items-center gap-2'>
          <Info color='success' fontSize='small' />
          <Typography>{t('secondaryHelp')}</Typography>
        </div>
      </Grid>
      {secondaryCurrencies?.length > 0 &&
        <>
          <Grid item xs={12}>
            <Typography sx={{ mt: 1 }}>{t('secondaryRate')}</Typography>
          </Grid>
          {secondaryCurrencies?.map((currency, index) => {
            const mode = watch?.(`exchangeRate.${index}.mode`)
            console.log('mode', mode, currency);
            return <Grid item xs={12} md={6} key={currency} style={{ marginBottom: '10px' }}>
              <div className='flex items-center gap-4'>
                <Typography>{currency}</Typography>
                <FormCurrencyRate
                  control={control}
                  type='number'
                  name={`exchangeRate.${index}`}
                  inputProps={{ step: '0.01' }}
                  mode={mode}
                />
                <LoadingButton variant='grey' disabled startIcon={<LegendToggleTwoTone />} sx={{ minWidth: '140px' }}>
                  {t('common:seeHistory')}
                </LoadingButton>
              </div>
            </Grid>
          })}
        </>}
    </Grid >
  );
};

export default memo(PaymentSettingsForm);
