import { Grid, Typography } from '@mui/material';
import { memo, useMemo } from 'react';
import { ShippingTimeForm } from 'modules/sales/settings/common/components/ShippingTimeForm';
import { FormCurrencyField } from 'components/CurrencyInput';
import { useTranslation } from 'react-i18next';
import { FormSwitchField, useDFLForm } from '@dfl/mui-react-common';

type Props = {
  disabled?: boolean,
};

const ExpressDeliveryGlobalForm = ({ disabled }: Props) => {
  const { t } = useTranslation('homeDelivery');
  const { watch } = useDFLForm();
  const hasExpress = watch?.('hasExpress');

  return (
    <div className='mt-3'>
      <div className='flex items-center gap-2 mb-2 mt-4'>
        <Typography variant='h3'>{t('expressDelivery')}</Typography>
        <FormSwitchField
          sx={{
            '.MuiSwitch-root': {
              width: 36,
              height: 18,
              padding: 0,
              '& .MuiSwitch-switchBase': {
                padding: '3px',
                top: '-1px',
                color: '#BABABA',
                '&.Mui-checked': {
                  transform: 'translateX(16px)',
                  color: '#fff',
                  '& + .MuiSwitch-track': {
                    backgroundColor: '#72B62F',
                    opacity: 1,
                  },
                },
                '&.Mui-disabled': {
                  color: '#BABABA',
                  '& + .MuiSwitch-track': {
                    backgroundColor: '#D9D9DC', // Color del track cuando está deshabilitado
                    opacity: 1,
                  },
                },
              },
              '& .MuiSwitch-thumb': {
                boxSizing: 'border-box',
                width: 14,
                height: 14,
                padding: 0,
              },
              '& .MuiSwitch-track': {
                borderRadius: 22 / 2,
                backgroundColor: '#D9D9DC',
                opacity: 1,
              },
              flexDirection: 'column',
            }
          }}
          disabled={disabled}
          name='hasExpress'
          label={undefined}
        />
      </div>
      <Grid container spacing={{ xs: 1, md: 2 }} mt={1}>
        <Grid item xs={12} md={2}>
          <FormCurrencyField
            name='expressPrice'
            label={t('fields.price')}
            size='small'
            disabled={disabled || hasExpress === false}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <ShippingTimeForm disabled={disabled || hasExpress === false} name='expressTime' />
        </Grid>
      </Grid >
    </div>

  );
};

export default memo(ExpressDeliveryGlobalForm);
