import { IconButton, LoadingButton, useDFLForm } from '@dfl/mui-react-common';
import { Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { CURRENCY_RATE_MODE, } from '../../constants';
import { LegendToggleTwoTone } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { FormCurrencyRate } from '../FormCurrencyRate';
import { ICurrencyConfig } from '../../interfaces';

type Props = {
  secondaryCurrencies: ICurrencyConfig[];
};

const SecondaryCurrencyForm = ({ secondaryCurrencies }: Props) => {
  const { watch, control } = useDFLForm();
  const { t } = useTranslation('paymentSettings');

  return (
    <>
      <Grid item xs={12}>
        <Typography sx={{ mt: 1 }}>{t('secondaryRate')}</Typography>
      </Grid>

      {secondaryCurrencies?.map((currencyConfig: ICurrencyConfig) => {
        const currencyIndex = watch?.('currencies').findIndex(
          (c: ICurrencyConfig) => c?.currency === currencyConfig?.currency
        );

        return (
          <Grid item xs={12} md={6} key={currencyIndex} style={{ marginBottom: '10px' }}>
            <div className='flex items-center gap-4'>
              <Typography>{currencyConfig?.currency}</Typography>
              <FormCurrencyRate
                control={control}
                type='number'
                name={`currencies.${currencyIndex}`}
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
          </Grid>
        );
      })}
    </>
  );
};

export default memo(SecondaryCurrencyForm);
