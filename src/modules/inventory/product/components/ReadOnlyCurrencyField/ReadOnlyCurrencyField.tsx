import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { NumberFormatCustom } from 'components/CurrencyInput';
import React, { memo } from 'react';

type ReadOnlyCurrencyFieldProps = {
  value: any;
  label: string;
  size?: 'small' | 'medium' | undefined
  id: string;
};

const ReadOnlyCurrencyField = ({ value, label, id, size = 'medium' }: ReadOnlyCurrencyFieldProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        readOnly
        className={'bg-gray-200 font-bold'}
        // @ts-ignore
        inputComponent={NumberFormatCustom}
        value={value}
        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
        label={label}
        size={size}
      />
    </FormControl>
  );
};

export default memo(ReadOnlyCurrencyField);
