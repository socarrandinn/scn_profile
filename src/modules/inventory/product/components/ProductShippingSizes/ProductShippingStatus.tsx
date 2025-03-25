import { memo } from 'react';
import { Grid } from '@mui/material';
import { Small } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { FormCustomSwitchField } from 'modules/common/components/IphoneSwitchField';

const ProductShippingStatus = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container marginBottom={2} paddingTop={2} spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <Small>{t('section.shipping.statusInfo.title')}</Small>
      </Grid>
      <Grid item container spacing={{ xs: 1, md: 2 }}>
        <Grid item xs={12} md={6} lg={4}>
          <FormCustomSwitchField
            name='shippingSettings.shippingInfo.fragile'
            label={t('section.shipping.statusInfo.fragile')}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FormCustomSwitchField
            name='shippingSettings.shippingInfo.needRefrigeration'
            label={t('section.shipping.statusInfo.needRefrigeration')}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(ProductShippingStatus);
