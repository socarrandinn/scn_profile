import { FormCheckBoxField } from '@dfl/mui-react-common';
import { Grid } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const SelectProductShippingFree = () => {
  const { t } = useTranslation('product');
  return (
    <Grid paddingLeft={1} spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <FormCheckBoxField name='shippingInfo.free' label={t('section.shipping.free')} />
    </Grid>
  );
};

export default memo(SelectProductShippingFree);
