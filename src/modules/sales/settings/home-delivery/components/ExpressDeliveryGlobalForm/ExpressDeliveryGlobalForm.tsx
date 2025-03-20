import { Grid } from '@mui/material';
import { memo } from 'react';
import { ShippingTimeForm } from 'modules/sales/settings/common/components/ShippingTimeForm';
import { FormCurrencyField } from 'components/CurrencyInput';
import { useTranslation } from 'react-i18next';
import { useDFLForm } from '@dfl/mui-react-common';

type Props = {
  disabled?: boolean;
  mdProps?: {
    price: number;
    time: number;
  };
};

const ExpressDeliveryGlobalForm = ({ disabled, mdProps }: Props) => {
  const { t } = useTranslation('homeDelivery');
  const { watch } = useDFLForm();
  const hasExpress = watch?.('hasExpress');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} mt={1}>
      <Grid item xs={12} md={mdProps?.price ?? 2}>
        <FormCurrencyField
          name='expressPrice'
          label={t('fields.price')}
          size='small'
          disabled={disabled || hasExpress === false}
        />
      </Grid>
      <Grid item xs={12} md={mdProps?.time ?? 3}>
        <ShippingTimeForm disabled={disabled || hasExpress === false} name='expressTime' />
      </Grid>
    </Grid>
  );
};

export default memo(ExpressDeliveryGlobalForm);
