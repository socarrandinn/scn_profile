import { Divider, FormHelperText, Grid } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormTextField, useDFLForm } from '@dfl/mui-react-common';
import { FormCurrencyField } from 'components/CurrencyInput';
import { removeBorder, StartAdornment } from '../ShippingTimeForm/ShippingTimeForm';
import { getErrorMessage } from 'utils/error-utils';

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
  const { formState } = useDFLForm();

  const messageError = (name: string) => {
    return getErrorMessage(formState?.errors?.[name]) || '';
  };

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
          sx={{ '.MuiFormHelperText-root': { display: 'none' } }}
          error={Boolean(messageError('weightPrice'))}
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
        {messageError('weightPrice') && (
          <FormHelperText error={true} sx={{ pl: 2 }}>
            {t(`errors:${messageError('weightPrice')}`)}
          </FormHelperText>
        )}
      </Grid>

      <Grid item xs={12} md={mdProps?.volumePrice ?? 5}>
        <FormTextField
          type='number'
          name='volumePrice.value'
          label={t('volumePrice')}
          size='small'
          sx={{ '.MuiFormHelperText-root': { display: 'none' } }}
          error={Boolean(messageError('volumePrice'))}
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
        {messageError('volumePrice') && (
          <FormHelperText error={true} sx={{ pl: 2 }}>
            {t(`errors:${messageError('volumePrice')}`)}
          </FormHelperText>
        )}
      </Grid>
    </ >
  );
};

export default memo(ShippingCostForm);
