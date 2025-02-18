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
        <FormTextField
          type='number'
          name='weightPrice.value'
          label={t('fields.weightPrice')}
          size='small'
          InputProps={{
            startAdornment: <InputAdornment position='start'>{'kg'}</InputAdornment>,
            endAdornment:
              <>
                <Divider orientation="vertical" variant="middle" flexItem />
                <FormCurrencyField
                  name='weightPrice.price'
                  sx={removeBorder}
                  size='small'
                />
              </>
          }}
        />
      </Grid>

      <Grid item xs={12} md={3.5}>
        <FormTextField
          type='number'
          name='volumePrice.value'
          label={t('fields.volumePrice')}
          size='small'
          InputProps={{
            startAdornment: <InputAdornment position='start'>{'m³'}</InputAdornment>,
            endAdornment:
              <>
                <Divider orientation="vertical" variant="middle" flexItem />
                <FormCurrencyField
                  name='volumePrice.price'
                  sx={removeBorder}
                />
              </>
          }}
        />
      </Grid>

      <Grid item xs={12} md={3.5}>
        <FormTextField
          name='time.from'
          label={t('fields.time')}
          size='small'
          type='number'
          InputProps={{
            startAdornment: <InputAdornment position='start'>{'desde'}</InputAdornment>,
            endAdornment:
              <>
                <Divider orientation="vertical" variant="middle" flexItem />
                <FormTextField
                  InputProps={{
                    startAdornment: <InputAdornment position='start'>{'hasta'}</InputAdornment>,
                  }}
                  type='number'
                  name='time.to'
                  sx={removeBorder}
                  size='small'
                />
              </>
          }}
        />
      </Grid>
    </Grid>
  );
};

export default memo(HomeDeliveryGlobalForm);
