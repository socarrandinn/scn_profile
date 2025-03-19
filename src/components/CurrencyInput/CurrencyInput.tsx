import React, { memo, ReactNode } from 'react';
import { NumericFormatProps, NumericFormat } from 'react-number-format';
import { TextField, TextFieldProps } from '@dfl/mui-react-common';
import { InputAdornment } from '@mui/material';

export type CurrencyInputProps = TextFieldProps & {
  min?: number;
  max?: number;
  startAdornmentString?: string;
  name: string;
  endAdornment?: ReactNode | string;
};

export const NumberFormatCustom = React.forwardRef<HTMLInputElement, NumericFormatProps>(
  ({ onChange, ...props }, ref) => {
    return (
      <NumericFormat
        {...props}
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
        getInputRef={ref}
      />
    );
  }
);

NumberFormatCustom.displayName = 'NumberFormatCustom';

const CurrencyInput = (props: CurrencyInputProps) => {
  return (
    <TextField
      InputProps={{
        inputProps: { min: props.min, max: props.max },
        // @ts-ignore
        inputComponent: NumberFormatCustom,
        startAdornment: <InputAdornment position='start'>{props.startAdornmentString || '$'}</InputAdornment>,
        endAdornment: props.endAdornment,
      }}
      {...props}
    />
  );
};

export default memo(CurrencyInput);
