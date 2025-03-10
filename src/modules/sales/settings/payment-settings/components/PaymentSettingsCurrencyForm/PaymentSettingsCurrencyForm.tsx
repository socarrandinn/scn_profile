import { FlexBox, FormRadioGroupField, FormTextField } from '@dfl/mui-react-common';
import { Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import { memo, useState } from 'react';
import { currencyTypeEnumValues } from '../../constants';
import { CurrencySelect } from 'modules/common/components/CurrencySelect';
import { Info } from '@mui/icons-material';

const PaymentSettingsForm = () => {
  const [selectedCurrencies, setSelectedCurrencies] = useState<string[]>([]);

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currency = event.target.value;
    if (event.target.checked) {
      setSelectedCurrencies([...selectedCurrencies, currency]);
    } else {
      setSelectedCurrencies(selectedCurrencies.filter((c) => c !== currency));
    }
  };
  console.log('selectedCurrencies', selectedCurrencies);

  const secondaryCurrencies = selectedCurrencies.filter((currency) => currency !== 'USD')

  return (
    <Grid container spacing={{ xs: 1, md: 1.5 }} columns={{ xs: 4, sm: 8, md: 12 }} alignItems={'center'}>
      <Grid item xs={12}>
        <Typography>Seleccione las monedas que serán utilizadas en la página</Typography>
        <FormRadioGroupField name={'name'} id={'name'}>
          <FlexBox gap={2} alignItems={'center'} justifyContent={'flex-start'}>
            {currencyTypeEnumValues?.map((currency) => (
              <FormControlLabel
                key={currency}
                value={currency}
                name='name'
                control={<Checkbox
                  checked={selectedCurrencies.includes(currency)}
                  onChange={handleCurrencyChange}
                />}
                sx={{ '.MuiSvgIcon-root': { width: 28, height: 28 } }}
                label={currency}
              />
            ))}
          </FlexBox>
        </FormRadioGroupField>
      </Grid>
      <Grid item xs={12}>
        <Typography>Seleccione la moneda principal de la página</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3.2}>
        <CurrencySelect />
      </Grid>
      <Grid item xs={12} sm={6} md={8.7}>
        <div className='flex items-center gap-2'>
          <Info color='success' fontSize='small' />
          <Typography>El resto de las monedas se consideran automáticamente monedas secundarias</Typography>
        </div>
      </Grid>
      {secondaryCurrencies?.length > 0 &&
        <Grid item xs={12}>
          <Typography>Configure el rate de cambio para las monedas secundarias</Typography>
          {secondaryCurrencies.map((currency) => (
            <div key={currency} style={{ marginBottom: '10px' }}>
              <Typography>{currency}</Typography>
              <FormTextField
                type='number'
                name='exchangeRate'
                inputProps={{ step: '0.01' }} // Permite decimales
              />
            </div>
          ))}
        </Grid>
      }
    </Grid >
  );
};

export default memo(PaymentSettingsForm);
