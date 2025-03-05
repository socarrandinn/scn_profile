import { Divider, FormHelperText, InputAdornment } from '@mui/material';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { FormTextField, useDFLForm } from '@dfl/mui-react-common';
import { getErrorMessage } from 'utils/error-utils';

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

export const sxInput = { '.MuiInputBase-input': { width: '60%' } }

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
  const { formState } = useDFLForm();

  const messageError = (name: string) => {
    return getErrorMessage(formState?.errors?.[name]) || '';
  };

  return (
    <>
      <FormTextField
        name='time.from'
        label={t('time.title')}
        size='small'
        type='number'
        disabled={disabled}
        error={Boolean(messageError('time'))}
        sx={{ ...sxInput, '.MuiFormHelperText-root': { display: 'none' } }}
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
                sx={{ ...removeBorder, '.MuiInputBase-input': { paddingRight: 0 } }}
                size='small'
              />
            </>
        }}
      />
      {messageError('time') && (
        <FormHelperText error={true} sx={{ pl: 2 }}>
          {t(`errors:${messageError('time')}`)}
        </FormHelperText>
      )}
    </>
  );
};

export default memo(ShippingTimeForm);
