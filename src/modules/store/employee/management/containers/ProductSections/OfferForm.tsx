import {
  FormTextField,
  Small,
  FormRadioGroupField,
  FormCheckBoxField,
  FormDatePickerField,
} from '@dfl/mui-react-common';
import { Grid, Stack, FormControlLabel, Radio, Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';
import { Controller } from 'react-hook-form';
import FormCheckbox from 'modules/store/employee/common/components/FormCheckbox/FormCheckbox';

const OfferForm = ({ control }: any) => {
  const { t } = useTranslation('product');
  const [checked, setChecked] = useState(false);
  const [selectedValue, setSelectValue] = useState('');
  const [selectedFromDate, setSelectedFromDate] = useState(new Date());
  const [selectedUntilDate, setSelectedUntilDate] = useState(new Date());

  const handleChangeFromDate = useCallback(
    (value: Date) => {
      setSelectedFromDate(value);
    },
    [setSelectedFromDate],
  );

  const handleChangeUntilDate = useCallback(
    (value: Date, keyBoardInputData: string) => {
      setSelectedUntilDate(value);
    },
    [setSelectedUntilDate],
  );

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <FormCheckbox name={'offer.enabled'} label={'Producto en oferta'} control={control}/>
      </Grid>
      <Grid item xs={12} md={12}>
        <Small>{t('section.offer.offerType')}</Small>
        <Stack spacing={2} alignItems={'start'} justifyContent={'start'}>
          <FormRadioGroupField name={'offer.discountType'}>
            <FormControlLabel value='Fijo' control={<Radio />} label={'Fijo'} />
            <FormControlLabel value='Porcentual' control={<Radio />} label={'Porcentual'} />
          </FormRadioGroupField>
        </Stack>
      </Grid>
      <Grid item xs={12} md={12}>
        <Stack spacing={2} direction='column'>
          <FormTextField
            fullWidth
            autoFocus
            required
            defaultValue={0}
            name='offer.discount'
            label={t('section.offer.title')}
          />
          <FormDatePickerField
            dark={false}
            name='offer.startDate'
            label={t('section.offer.availableFrom')}
            size={'medium'}
          />
          <FormDatePickerField
            dark={false}
            name='offer.expiration'
            label={t('section.offer.availableUntil')}
            // value={selectedUntilDate}
            // onChange={handleChangeUntilDate}
            size={'medium'}
          />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default OfferForm;
