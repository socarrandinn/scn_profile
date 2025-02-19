import { Divider, InputAdornment } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormTextField } from '@dfl/mui-react-common';

export const removeBorder = {
  '& .MuiOutlinedInput-root': {
    border: 'none',
    '& fieldset': {
      border: 'none',
    },
    '&:hover fieldset': {
      border: 'none',
    },
    '&.Mui-focused fieldset': {
      border: 'none',
    },
  },
};

export const StartAdornment = ({ text }: { text: string }) => {
  return (
    <InputAdornment position='start' sx={{ '.MuiTypography-root': { color: '#9499A1 !important' } }}>
      {text}
    </InputAdornment>
  );
};

type Props = {
  disabled?: boolean,
}
const ShippingTimeForm = ({ disabled }: Props) => {
  const { t } = useTranslation('homeDelivery');

  return (
    <FormTextField
      name='time.from'
      label={t('fields.time')}
      size='small'
      defaultValue={0}
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
              defaultValue={0}
              sx={{ ...removeBorder }}
              size='small'
            />
          </>
      }}
    />
  );
};

export default memo(ShippingTimeForm);
