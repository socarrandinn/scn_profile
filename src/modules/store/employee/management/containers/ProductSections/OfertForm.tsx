import {
  FormTextField,
  Small,
  FlexBox,
  CheckBoxField,
  RadioField,
  RadioGroupField,
  DatePickerField,
} from '@dfl/mui-react-common';
import { Box, Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useCallback, useState } from 'react';

const ofertTypes = ['Fijo', 'Porcentual'];

const OfertForm = () => {
  const { t } = useTranslation('product');
  const [checked, setChecked] = useState(false);
  const [selectedValue, setSelectValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = useCallback(
    (value: Date, keyBoardInputData: string) => {
      setSelectedDate(value);
    },
    [setSelectedDate],
  );

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={12}>
        <CheckBoxField
          label={'Producto en oferta'}
          checked={checked}
          onChange={(event) => {
            setChecked(event?.target?.checked);
          }}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <Small>{t('section.ofert.ofertType')}</Small>
        <Stack spacing={2} alignItems={'start'} justifyContent={'start'}>
          <RadioGroupField value={selectedValue} row radioGroup={'button-group-name'}>
            {ofertTypes.map((type: string) => (
              <RadioField
                key={type}
                label={type}
                value={selectedValue}
                checkValue={type}
                onChange={(event) => {
                  setSelectValue(event?.target?.value);
                }}
              />
            ))}
          </RadioGroupField>
        </Stack>
      </Grid>
      <Grid item xs={12} md={12}>
        <Stack spacing={2} direction="column">
          <FormTextField fullWidth autoFocus required name='section.ofert.title' label={t('section.ofert.title')} />
          <DatePickerField dark={false} label={'Date'} value={selectedDate} onChange={handleChange} size={'medium'} />
          <DatePickerField dark={false} label={'Date'} value={selectedDate} onChange={handleChange} size={'medium'} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default OfertForm;
