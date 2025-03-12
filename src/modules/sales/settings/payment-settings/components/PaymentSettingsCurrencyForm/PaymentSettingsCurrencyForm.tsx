import { FlexBox, FormRadioGroupField, FormTextField, LoadingButton, useDFLForm } from '@dfl/mui-react-common';
import { Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import { memo, useState } from 'react';
import { CURRENCY_RATE_MODE, currencyTypeEnumValues } from '../../constants';
import { CurrencySelect } from 'modules/common/components/CurrencySelect';
import { Info, LegendToggleTwoTone } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { FormCurrencyRate } from '../FormCurrencyRate';

const PaymentSettingsForm = () => {
  const { t } = useTranslation('paymentSettings');
  const { watch, control } = useDFLForm();
  const primaryCurrency = watch?.('primaryCurrency');

  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currency = event.target.value;
    if (event.target.checked) {
      setSelectedCurrencies([...selectedCurrencies, currency]);
    } else {
      setSelectedCurrencies(selectedCurrencies.filter((c) => c !== currency));
    }
  };

  const secondaryCurrencies = selectedCurrencies.filter((currency) => currency !== primaryCurrency);

  return (
    <Grid container spacing={{ xs: 1, md: 1.5 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems={'center'}>
      <Grid item xs={12}>
        <Typography>{t('currenciesSelect')}</Typography>
        <FormRadioGroupField name={'activeCurrencies'}>
          <FlexBox gap={2} alignItems={'center'} justifyContent={'flex-start'}>
            {currencyTypeEnumValues?.map((currency) => (
              <FormControlLabel
                key={currency}
                value={currency}
                name='activeCurrencies'
                control={<Checkbox
                  checked={selectedCurrencies.includes(currency)}
                  onChange={handleCurrencyChange}
                />}
                sx={{ '.MuiSvgIcon-root': { width: 28, height: 28 } }}
                label={t(currency)}
              />
            ))}
          </FlexBox>
        </FormRadioGroupField>
      </Grid>
      <Grid item xs={12}>
        <Typography>{t('primaryCurrency')}</Typography>
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
            <Typography>{t('secondaryRate')}</Typography>
          </Grid>
          {secondaryCurrencies?.map((currency) => (
            <Grid item xs={12} md={6} key={currency} style={{ marginBottom: '10px' }}>
              <div className='flex items-center gap-4'>
                <Typography>{currency}</Typography>
                <FormCurrencyRate
                  control={control}
                  type='number'
                  name='exchangeRate.rates'
                  inputProps={{ step: '0.01' }}
                />
                <LoadingButton variant='grey' disabled startIcon={<LegendToggleTwoTone />} sx={{ minWidth: '140px' }}>
                  {t('common:seeHistory')}
                </LoadingButton>
              </div>
            </Grid>
          ))}
        </>}
    </Grid >
  );
};

export default memo(PaymentSettingsForm);
