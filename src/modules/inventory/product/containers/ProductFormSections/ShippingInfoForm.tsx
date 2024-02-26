import { Grid, Divider, Stack, FormControlLabel, Radio } from '@mui/material';
import { Small, FormRadioGroupField, FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { FormProductKeyworsField } from 'modules/inventory/product/components/ProductKeywordsImput';
import AddZoneProduct from 'modules/inventory/product/components/AddZoneProduct/AddZoneProduct';
import { ProductShippingWeight } from 'modules/inventory/product/components/ProductShippingWeight';
import { ProductShippingSizes } from 'modules/inventory/product/components/ProductShippingSizes';
import { SelectProductShippingFree } from 'modules/inventory/product/components/SelectProductShippingFree';
import { ProductShippingRules } from 'modules/inventory/product/components/ProductShippingRules';

const ShippingInfoForm = ({ handleLimitByOrder }: { handleLimitByOrder: any }) => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <ProductShippingWeight />
      <Divider />
      <ProductShippingSizes />
      <Divider />
      <Grid item xs={12} md={12}>
        <Small>{t('section.shipping.allowedZones')}</Small>
        <Stack spacing={2} alignItems={'start'} justifyContent={'start'}>
          <FormRadioGroupField name={'shipping.discountType'}>
            <FlexBox display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'}>
              <FormControlLabel value='Permitir' control={<Radio />} label={'Permitir'} />
              <FormControlLabel value='Denegado' control={<Radio />} label={'Denegado'} />
            </FlexBox>
          </FormRadioGroupField>
        </Stack>
        <AddZoneProduct />
        <Grid item xs={12} md={12}>
          <FormProductKeyworsField name='shippingInfo.rules' label='' />
        </Grid>
        <Divider />
      </Grid>

      <ProductShippingRules handleLimitByOrder={handleLimitByOrder} />
      <SelectProductShippingFree />
    </Grid>
  );
};

export default ShippingInfoForm;
