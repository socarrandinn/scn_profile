import { Divider, Grid } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';
import { FormCurrencyField } from 'components/CurrencyInput';
import { removeBorder, StartAdornment } from '../ShippingTimeForm/ShippingTimeForm';

type GridProps = {
  price?: number;
  weightPrice?: number;
  volumePrice?: number;
};

type Props = {
  disabled?: boolean,
  mdProps?: GridProps,
};

const ShippingCostForm = ({ disabled, mdProps }: Props) => {
  const { t } = useTranslation('homeDelivery');

  return (
    <>
      <Grid item xs={12} md={mdProps?.price ?? 2}>
        <FormCurrencyField
          name='price'
          label={t('fields.price')}
          size='small'
          defaultValue={0}
          disabled={disabled}
        />
      </Grid>

      <Grid item xs={12} md={mdProps?.weightPrice ?? 5}>
        <FormTextField
          type='number'
          name='weightPrice.value'
          label={t('weightPrice')}
          disabled={disabled}
          size='small'
          InputProps={{
            startAdornment: <StartAdornment text={'kg'} />,
            endAdornment:
              <>
                <Divider orientation="vertical" variant="middle" flexItem />
                <FormCurrencyField
                  disabled={disabled}
                  defaultValue={0}
                  name='weightPrice.price'
                  sx={removeBorder}
                  size='small'
                />
              </>
          }}
        />
      </Grid>

      <Grid item xs={12} md={mdProps?.volumePrice ?? 5}>
        <FormTextField
          type='number'
          name='volumePrice.value'
          label={t('volumePrice')}
          size='small'
          defaultValue={0}
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
    </ >
  );
};

export default memo(ShippingCostForm);
