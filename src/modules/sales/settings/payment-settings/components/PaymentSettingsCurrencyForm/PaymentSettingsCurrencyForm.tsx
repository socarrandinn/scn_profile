import { FlexBox, FormRadioGroupField } from '@dfl/mui-react-common';
import { Checkbox, FormControlLabel, Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { currencyTypeEnumValues } from '../../constants';
import { CurrencySelect } from 'modules/common/components/CurrencySelect';

const PaymentSettingsForm = () => {
  return (
    <Grid container spacing={{ xs: 1, md: 1.5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12}>
        <Typography>Seleccione las monedas que serán utilizadas en la página</Typography>
        <FormRadioGroupField name={'name'} id={'name'}>
          <FlexBox gap={2} alignItems={'center'} justifyContent={'flex-start'}>
            {currencyTypeEnumValues?.map((currency) => (
              <FormControlLabel
                key={currency}
                value={currency}
                control={<Checkbox />}
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
      <Grid item xs={12} sm={6} md={3.3}>
        <CurrencySelect />
        <Typography>El resto de las monedas se consideran automáticamente monedas secundarias</Typography>
      </Grid>
    </Grid >
  );
};

export default memo(PaymentSettingsForm);
