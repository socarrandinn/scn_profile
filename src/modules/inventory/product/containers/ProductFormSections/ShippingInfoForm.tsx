import { Grid, Divider, Stack, FormControlLabel, Radio } from '@mui/material';
import { FormTextField, Small, FormRadioGroupField, FormCheckBoxField, FlexBox } from '@dfl/mui-react-common';
import { useTranslation } from 'react-i18next';
import { FormProductKeyworsField } from '../../components/ProductKeywordsImput';
// import AddOutlined from '@mui/icons-material/AddOutlined';
import AddZoneProduct from 'modules/inventory/product/components/AddZoneProduct/AddZoneProduct';

const ShippingInfoForm = () => {
  const { t } = useTranslation('product');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <Small>{t('section.shipping.weight.title')}</Small>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormTextField
          fullWidth
          autoFocus
          required
          defaultValue={0}
          name='shippingInfo.weight'
          label={t('section.shipping.weight.weightLabel')}
        />
        <Divider />
      </Grid>
      <Grid item xs={12} md={12}>
        <Small>{t('section.shipping.sizesInfo.title')}</Small>
      </Grid>
      <Grid container item spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} md={4}>
          <FormTextField
            fullWidth
            autoFocus
            required
            defaultValue={0}
            name='shipping.length'
            label={t('section.shipping.sizesInfo.length')}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormTextField
            fullWidth
            autoFocus
            required
            defaultValue={0}
            name='shipping.width'
            label={t('section.shipping.sizesInfo.width')}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FormTextField
            fullWidth
            autoFocus
            required
            defaultValue={0}
            name='shippingInfo.height'
            label={t('section.shipping.sizesInfo.height')}
          />
        </Grid>
        <Divider />
      </Grid>
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
      <Grid item xs={12} md={12}>
        <Stack spacing={1} alignItems={'start'} justifyContent={'start'}>
          <Small>{t('section.shippingInfo.rules')}</Small>
          <FormCheckBoxField name={'rules.limitByAge'} label={'+21'} />
          <FormCheckBoxField name={'rules.limitByAge'} label={'Limitar el producto por orden'} />
          <FormCheckBoxField name={'rules.limitByAge'} label={'Solo en ordenes por encargo'} />
          <Divider />
          <FormCheckBoxField name={'shipping.free'} label={'Envio gratis'} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ShippingInfoForm;
