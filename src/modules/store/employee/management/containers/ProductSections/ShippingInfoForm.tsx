import {
  FormTextField,
  Small,
  CheckBoxField,
  RadioField,
  RadioGroupField,
  IconButton,
  FormRadioGroupField,
} from '@dfl/mui-react-common';
import { Grid, Divider, Stack, Box } from '@mui/material';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import AddOutlined from '@mui/icons-material/AddOutlined';
import AddZoneProduct from 'modules/store/employee/management/components/AddZoneProduct/AddZoneProduct';

const genders = ['Permitir', 'Denegado'];
const rules = ['+21', 'Limitar el producto por orden', 'Solo en ordenes por encargo'];

const ShippingInfoForm = () => {
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
        <Small>{t('shipping.allowedZones')}</Small>
        <Stack spacing={2} alignItems={'start'} justifyContent={'start'}>
          <RadioGroupField value={selectedValue} row radioGroup={'button-group-name'}>
            {genders.map((gender: string) => (
              <RadioField
                key={gender}
                label={gender}
                value={selectedValue}
                checkValue={gender}
                onChange={(event) => {
                  setSelectValue(event?.target?.value);
                }}
              />
            ))}
          </RadioGroupField>
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
          {rules.map((rule: string) => (
            <CheckBoxField
              sx={{ paddingLeft: '0' }}
              label={rule}
              checked={checked}
              onChange={(event) => {
                setChecked(event?.target?.checked);
              }}
            />
          ))}
          <Box>
            <Divider />
          </Box>
          <CheckBoxField
            label={'Envio gratis'}
            sx={{ paddingLeft: '0' }}
            checked={checked}
            onChange={(event) => {
              setChecked(event?.target?.checked);
            }}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ShippingInfoForm;
