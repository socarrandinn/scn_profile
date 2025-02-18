import { Divider, Grid, InputAdornment } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';
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

const StartAdornment = ({ text }: { text: string }) => {
  return (
    <InputAdornment position='start' sx={{ '.MuiTypography-root': { color: '#9499A1 !important' } }}>
      {text}
    </InputAdornment>
  );
};

const HomeDeliveryGlobalForm = ({ disabled }: { disabled?: boolean }) => {
  const { t } = useTranslation('homeDelivery');

  return (
    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      <Grid item xs={12} md={1.5}>
        <FormCurrencyField
          name='price'
          label={t('fields.price')}
          size='small'
          disabled={disabled}
        />
      </Grid>

      <Grid item xs={12} md={3.5}>
        <FormTextField
          type='number'
          name='weightPrice.value'
          label={t('fields.weightPrice')}
          disabled={disabled}
          size='small'
          InputProps={{
            startAdornment: <StartAdornment text={'kg'} />,
            endAdornment:
              <>
                <Divider orientation="vertical" variant="middle" flexItem />
                <FormCurrencyField
                  disabled={disabled}
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
          disabled={disabled}
          InputProps={{
            startAdornment: <StartAdornment text={'m³'} />,
            endAdornment:
              <>
                <Divider orientation="vertical" variant="middle" flexItem />
                <FormCurrencyField
                  disabled={disabled}
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
          disabled={disabled}
          InputProps={{
            startAdornment: <StartAdornment text={t('time.from')} />,
            endAdornment:
              <>
                <Divider orientation="vertical" variant="middle" flexItem />
                <FormTextField
                  disabled={disabled}
                  InputProps={{
                    startAdornment: <StartAdornment text={t('time.to')} />,
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
