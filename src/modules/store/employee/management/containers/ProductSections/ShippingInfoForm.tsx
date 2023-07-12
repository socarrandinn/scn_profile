import {
  FormTextField,
  Small,
  FlexBox,
  CheckBoxField,
  RadioField,
  RadioGroupField,
  IconButton,
  useDFLForm
} from '@dfl/mui-react-common';
import { Grid, Divider, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import FormProvinceSelect from 'modules/common/components/Address/ProvinceSelect';
import MunicipalitySelect from 'modules/common/components/Address/MunicipalitySelect';
import AddOutlined from '@mui/icons-material/AddOutlined';
import AddressInfoForm from 'modules/store/employee/management/containers/EmploySections/AddressInfoForm';

const genders = ['Permitir', 'Denegado'];
const rules = ['+21', 'Limitar el producto por orden', 'Solo en ordenes por encargo'];

const ShippingInfoForm = () => {
  const { t } = useTranslation('product');
  const [checked, setChecked] = useState(false);
  const [selectedValue, setSelectValue] = useState('');
  const { watch } = useDFLForm();
  // const state = watch?.(`${name}.state`) || stateValue;

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <Divider />
        <Small>{t('section.shippingInfo.weight.title')}</Small>
        <FormTextField
          fullWidth
          autoFocus
          required
          name='section.shippingInfo.weight.weightLabel'
          label={t('section.shippingInfo.weight.weightLabel')}
        />
        <Divider />
      </Grid>
      <Grid item xs={12} md={12}>
        <Small>{t('section.shippingInfo.sizesInfo.title')}</Small>
      </Grid>
      <Grid container item spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} md={12}>
          <FormTextField
            fullWidth
            autoFocus
            required
            name='section.shippingInfo.sizesInfo.long'
            label={t('section.shippingInfo.sizesInfo.long')}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FormTextField
            fullWidth
            autoFocus
            required
            name='section.shippingInfo.sizesInfo.width'
            label={t('section.shippingInfo.sizesInfo.width')}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <FormTextField
            fullWidth
            autoFocus
            required
            name='section.shippingInfo.sizesInfo.height'
            label={t('section.shippingInfo.sizesInfo.height')}
          />
        </Grid>
        <Divider />
      </Grid>
      <Grid item xs={12} md={12}>
        <Small>{t('section.shippingInfo.allowedZones')}</Small>
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
          <AddressInfoForm/>
       {/* <FormProvinceSelect name="province" required multiple={false} label={'Provincia'} placeholder={'Provincia'}  helperText={''} />
        <MunicipalitySelect name="municipality" state={'Artemsia'} onChange={() => {}} disabled={false} />*/}
        <IconButton tooltip={'Add Zone'} disabled={false} color={'primary'}>
          <AddOutlined />
        </IconButton>
        <Divider />
      </Grid>
      <Grid item xs={12} md={12}>
        <Stack spacing={1} alignItems={'start'} justifyContent={'start'}>
          <Small>{t('section.shippingInfo.rules')}</Small>
          {rules.map((rule: string) => (
            <CheckBoxField
              label={rule}
              checked={checked}
              onChange={(event) => {
                setChecked(event?.target?.checked);
              }}
            />
          ))}
        </Stack>
        <Divider />
        <CheckBoxField
          label={'Envio gratis'}
          checked={checked}
          onChange={(event) => {
            setChecked(event?.target?.checked);
          }}
        />
      </Grid>
    </Grid>
  );
};

export default ShippingInfoForm;
