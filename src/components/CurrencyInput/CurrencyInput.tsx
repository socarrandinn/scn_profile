import React, { memo } from 'react';
import { InputAdornment, TextFieldProps } from '@mui/material';
import { NumericFormatProps, NumericFormat } from 'react-number-format';
import { TextField } from '@dfl/mui-react-common';

export type CurrencyInputProps = TextFieldProps & {
  min?: number;
  max?: number;
  startAdornmentString?: string;
  name: string;
};

export const NumberFormatCustom = ({ onChange, ...props }: NumericFormatProps) => {
  return (
    <NumericFormat
      decimalScale={2}
      fixedDecimalScale
      thousandSeparator={','}
      onValueChange={(values) => {
        onChange &&
          onChange({
            // @ts-ignore
            target: {
              name: props.name || '',
              value: values.value,
            },
            persist: () => null,
          });
      }}
      {...props}
    />
  );
};

const CurrencyInput = (props: CurrencyInputProps) => {
  return (
    <TextField
      InputProps={{
        inputProps: { min: props.min, max: props.max },
        // @ts-ignore
        inputComponent: NumberFormatCustom,
        startAdornment: <InputAdornment position='start'>{props.startAdornmentString || '$'}</InputAdornment>,
      }}
      {...props}
    />
  );
};

export default memo(CurrencyInput);
