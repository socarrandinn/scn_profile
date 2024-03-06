import { FormTextField, Small } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ProductShippingWeight = () => {
  const { t } = useTranslation('product');
  return (
    <Grid container marginBottom={2} paddingTop={2} spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <Small>{t('section.shipping.weight.title')}</Small>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          type='number'
          name='shippingInfo.weight'
          label={t('section.shipping.weight.weightLabel')}
          size='small'
          inputProps={{
            inputMode: 'numeric',
            pattern: '[0-9]*',
            min: 0,
            step: 0.01,
          }}
        />
      </Grid>
    </Grid>
  );
};

export default memo(ProductShippingWeight);
