import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { NumberFormatCustom } from 'components/CurrencyInput';
import React, { memo } from 'react';

type ReadOnlyCurrencyFieldProps = {
  value: any;
  label: string;
  id: string;
};

const ReadOnlyCurrencyField = ({ value, label, id }: ReadOnlyCurrencyFieldProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        readOnly
        // @ts-ignore
        inputComponent={NumberFormatCustom}
        value={value}
        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
        label={label}
        size='small'
      />
    </FormControl>
  );
};

export default memo(ReadOnlyCurrencyField);
