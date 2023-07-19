import { FormTextField, Small, IconButton, FormRadioGroupField } from '@dfl/mui-react-common';
import { Grid, Divider, Stack, FormControlLabel, Radio } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import AddOutlined from '@mui/icons-material/AddOutlined';
import AddZoneProduct from 'modules/store/employee/management/components/AddZoneProduct/AddZoneProduct';
import { Control, FieldValues } from 'react-hook-form';
import FormCheckbox from 'modules/store/employee/common/components/FormCheckbox/FormCheckbox';

const rules = ['+21', 'Limitar el producto por orden', 'Solo en ordenes por encargo'];

type props = {
  control: Control<FieldValues>;
};
const ShippingInfoForm = ({ control }: props) => {
  const { t } = useTranslation('product');
  const [checked, setChecked] = useState(false);
  const [selectedValue, setSelectValue] = useState('');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <Small>{t('section.shipping.weight.title')}</Small>
      </Grid>
      <Grid item xs={12} md={12}>
        <FormTextField
          fullWidth
          autoFocus
          required
          defaultValue={0}
          name='shipping.weight'
          label={t('section.shipping.weight.weightLabel')}
        />
        <Divider />
      </Grid>
      <Grid item xs={12} md={12}>
        <Small>{t('section.shipping.sizesInfo.title')}</Small>
      </Grid>
      <Grid container item spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} md={12}>
          <FormTextField
            fullWidth
            autoFocus
            required
            defaultValue={0}
            name='shipping.length'
            label={t('section.shipping.sizesInfo.length')}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FormTextField
            fullWidth
            autoFocus
            required
            defaultValue={0}
            name='shipping.width'
            label={t('section.shipping.sizesInfo.width')}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FormTextField
            fullWidth
            autoFocus
            required
            defaultValue={0}
            name='shipping.height'
            label={t('section.shipping.sizesInfo.height')}
          />
        </Grid>
        <Divider />
      </Grid>
      <Grid item xs={12} md={12}>
        <Small>{t('section.shipping.allowedZones')}</Small>
        <Stack spacing={2} alignItems={'start'} justifyContent={'start'}>
          <FormRadioGroupField name={'shipping.discountType'}>
            <FormControlLabel value='Permitir' control={<Radio />} label={'Permitir'} />
            <FormControlLabel value='Denegado' control={<Radio />} label={'Denegado'} />
          </FormRadioGroupField>
        </Stack>
        <AddZoneProduct />
        <IconButton tooltip={'Add Zone'} disabled={false} color={'primary'}>
          <AddOutlined />
        </IconButton>
        <Divider />
      </Grid>
      <Grid item xs={12} md={12}>
        <Stack spacing={1} alignItems={'start'} justifyContent={'start'}>
          <Small>{t('section.shipping.rules')}</Small>
          <FormCheckbox control={control} name={'rules.limitByAge'} label={'+21'} />
          <Divider />
          <FormCheckbox control={control} name={'shipping.free'} label={'Envio gratis'} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ShippingInfoForm;
