import { Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { ShippingTimeForm } from 'modules/sales/settings/common/components/ShippingTimeForm';
import { FormCurrencyField } from 'components/CurrencyInput';
import { useTranslation } from 'react-i18next';
import { useDFLForm } from '@dfl/mui-react-common';
import { IphoneSwitchField } from 'modules/common/components/IphoneSwitchField';

type Props = {
  disabled?: boolean,
};

const ExpressDeliveryGlobalForm = ({ disabled }: Props) => {
  const { t } = useTranslation('homeDelivery');
  const { watch } = useDFLForm();
  const hasExpress = watch?.('hasExpress');

  return (
    <div className='mt-3'>
      <div className='flex items-center gap-6 my-4'>
        <Typography variant='h3'>{t('expressDelivery')}</Typography>
        <IphoneSwitchField label={undefined} name='hasExpress' disabled={disabled} />
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
