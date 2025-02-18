import { Divider, Grid, InputAdornment, Stack } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FlexBox, FormTextField, TextField } from '@dfl/mui-react-common';
import { FormCurrencyField } from 'components/CurrencyInput';

const removeBorder = {
  '& .MuiOutlinedInput-root': {
    border: 'none', // Quita el borde del input interno
    '& fieldset': {
      border: 'none', // Quita el borde del fieldset
    },
    '&:hover fieldset': {
      border: 'none', // Quita el borde al hacer hover
    },
    '&.Mui-focused fieldset': {
      border: 'none', // Quita el borde al estar enfocado
    },
  },
};

const HomeDeliveryGlobalForm = () => {
  const { t } = useTranslation('homeDelivery');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={1.5}>
        <FormCurrencyField
          name='price'
          label={t('fields.price')}
          size='small'
        />
      </Grid>

      <Grid item xs={12} md={3.5}>
        <FormCurrencyField
          startAdornmentString='kg'
          name='weightPrice.value'
          label={t('fields.weightPrice')}
          size='small'
          endAdornment={
            <>
              <Divider orientation="vertical" variant="middle" flexItem />
              <FormCurrencyField
                sx={removeBorder}
                name='weightPrice.price'
              />
            </>
          }
        />
      </Grid>

      <Grid item xs={12} md={3.5}>
        <FormCurrencyField
          name='volumePrice.value'
          label={t('fields.volumePrice')}
          size='small'
          endAdornment={
            <>
              <Divider orientation="vertical" variant="middle" flexItem />
              <FormCurrencyField
                name='volumePrice.price'
                sx={removeBorder}
              />
            </>
          }
          startAdornmentString='m³'
        />
      </Grid>

      <Grid item xs={12} md={3.5}>
        <FormCurrencyField
          name='time.from'
          label={t('fields.time')}
          size='small'
          startAdornmentString='desde'
          endAdornment={
            <>
              <Divider orientation="vertical" variant="middle" flexItem />
              <FormCurrencyField
                startAdornmentString='hasta'
                name='time.to'
                sx={removeBorder}
                size='small'
              />
            </>
          }
        />
      </Grid>
    </Grid>
  );
};

export default memo(HomeDeliveryGlobalForm);
