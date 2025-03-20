import { memo } from 'react';
import { Grid } from '@mui/material';
import { Small } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import ProductSizeInput from 'modules/inventory/product/components/ProductShippingSizes/ProductSizeInput';

const ProductShippingSizes = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container marginBottom={2} paddingTop={2} spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <Small>{t('section.shipping.sizesInfo.title')}</Small>
      </Grid>
      <Grid item container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} md={4}>
          <ProductSizeInput
            name='shippingSettings.shippingInfo.length'
            label={t('section.shipping.sizesInfo.length')}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProductSizeInput name='shippingSettings.shippingInfo.width' label={t('section.shipping.sizesInfo.width')} />
        </Grid>
        <Grid item xs={12} md={4}>
          <ProductSizeInput
            name='shippingSettings.shippingInfo.height'
            label={t('section.shipping.sizesInfo.height')}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default memo(ProductShippingSizes);
