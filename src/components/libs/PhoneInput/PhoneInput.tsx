import RPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { FormHelperText, TextFieldProps } from '@mui/material';
import { memo } from 'react';
import { FormFieldControl, FormLabel } from '@dfl/mui-react-common';
import { styled } from '@mui/material/styles';
import { isString } from 'lodash';

export const PhoneStyle = styled('div')<{ dark?: boolean; error?: boolean, hasLabel?: boolean }>(({
  theme,
  dark,
  error,
  hasLabel
}) =>
  dark
    ? {
        minWidth: 186,
        position: 'relative',
        'input.form-control': {
          fontFamily: theme.typography.fontFamily,
          fontSize: 12,
          minHeight: 20,
          fontWeight: 500,
          color: theme.palette.text.primary,
          borderColor: 'transparent',
          borderWidth: '1px !important',
          padding: '11px 14px 11px 58px',
          width: '100%',
          // @ts-ignore
          backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey || '#e5eaf2' : theme.palette.divider,
          '&:hover, &:focus': {
            borderColor: theme.palette.primary.main,
            boxShadow: 'none',
          },
        },
        '.react-tel-input .special-label': {
          display: 'none',
        },
        '.react-tel-input .country-list': {
          width: '270px',
        },
      }
    : {
        minWidth: 186,
        position: 'relative',
        'input.form-control': {
          padding: '16px 14px 16px 58px',
          fontFamily: theme.typography.fontFamily,
          width: '100%',
          ...(error
            ? {
                borderColor: error ? theme.palette.error.main : theme.palette.primary.main,
              }
            : {}),
          '&:active, &:focus': {
            borderColor: error ? theme.palette.error.main : theme.palette.primary.main,
            boxShadow: `0 0 0 1px ${error ? theme.palette.error.main : theme.palette.primary.main}`,
          },
        },
        '.react-tel-input .special-label': {
          fontFamily: theme.typography.fontFamily,
          left: 10,
          fontSize: 12,
          color: error ? theme.palette.error.main : theme.palette.text.secondary,
        },
        '.react-tel-input .country-list': {
          width: '270px',
        },
        ...(hasLabel
          ? {}
          : {
              '.react-tel-input .special-label': {
                display: 'none',
              },
            })

      },
)
;

const PhoneInput = ({
  value,
  onChange,
  dark,
  name,
  country = 'cu',
  required,
  className,
  helperText,
  error,
  label,
  size,
  ...props
}: { country?: string; dark?: boolean } & TextFieldProps) => {
  const handleChange = (value: string) => {
    // @ts-ignore
    onChange?.({ target: { value } });
  };

  const formLabel = required && isString(label) ? `${label}*` : label;

  return (
        <PhoneStyle dark={dark} error={error} className={`phone-input-style phone-input-${size || ''}`} hasLabel={!!label}>
            <FormLabel label={dark ? formLabel : undefined}>
                <RPhoneInput
                    {...props}
                    dropdownStyle={{ zIndex: 100 }}
                    specialLabel={formLabel as string}
                    country={country}
                    value={value as string}
                    onChange={handleChange}
                />
            </FormLabel>
            {helperText ? <FormHelperText error={error}>{helperText}</FormHelperText> : <></>}
        </PhoneStyle>
  );
};

export default memo(PhoneInput);

export const FormPhoneInput = (props: { country?: string } & any) => {
  return <FormFieldControl {...props} Component={PhoneInput}/>;
};
