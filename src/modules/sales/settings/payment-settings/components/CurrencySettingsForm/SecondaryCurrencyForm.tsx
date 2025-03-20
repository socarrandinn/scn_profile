import { IconButton, LoadingButton, useDFLForm } from '@dfl/mui-react-common';
import { FormHelperText, Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { CURRENCY_RATE_MODE } from '../../constants';
import { LegendToggleTwoTone } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { FormCurrencyRate } from '../FormCurrencyRate';
import { ICurrencyConfig } from '../../interfaces';

type Props = {
  secondaryCurrencies: ICurrencyConfig[];
};

const SecondaryCurrencyForm = ({ secondaryCurrencies }: Props) => {
  const { t } = useTranslation('paymentSettings');
  const { watch, control, formState } = useDFLForm();

  return (
    <>
      <Grid item xs={12}>
        <Typography sx={{ mt: 1 }}>{t('secondaryRate')}</Typography>
      </Grid>

      <Grid item xs={12} md={12} container spacing={2} alignItems='stretch'>
        {secondaryCurrencies?.map((currencyConfig: ICurrencyConfig) => {
          const currencyIndex = watch?.('currencies')?.findIndex(
            (c: ICurrencyConfig) => c?.currency === currencyConfig?.currency,
          );
          const messageError = formState?.errors?.currencies?.[currencyIndex]?.exchangeRate?.message;

          return (
            <Grid item xs={12} md={6} key={currencyIndex} marginBottom={2}>
              <div className='flex flex-col gap-2' style={{ height: '100%' }}>
                <div className='flex items-center gap-4' style={{ flex: 1 }}>
                  <Typography>{currencyConfig?.currency}</Typography>
                  <FormCurrencyRate
                    control={control}
                    name={`currencies.${currencyIndex as string}`}
                    inputProps={{ step: '0.01' }}
                    mode={currencyConfig?.isCustomRate}
                    disabled={currencyConfig?.isCustomRate === CURRENCY_RATE_MODE.AUTOMATIC}
                  />
                  <LoadingButton
                    variant='grey'
                    disabled
                    startIcon={<LegendToggleTwoTone />}
                    sx={{ minWidth: '140px', display: { xs: 'none', md: 'flex' } }}
                  >
                    {t('common:seeHistory')}
                  </LoadingButton>
                  <IconButton
                    tooltip={t('common:seeHistory')}
                    sx={{ display: { xs: 'flex', md: 'none' }, borderRadius: '5px', background: '#F5F5F5' }}
                  >
                    <LegendToggleTwoTone />
                  </IconButton>
                </div>
                {messageError && (
                  <FormHelperText error={true} sx={{ pl: 7, position: 'absolute', marginTop: '40px' }}>
                    {t(`errors:${messageError as string}`)}
                  </FormHelperText>
                )}
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default memo(SecondaryCurrencyForm);
