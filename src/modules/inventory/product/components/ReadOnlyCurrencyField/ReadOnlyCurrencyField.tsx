import { FormControl, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { NumberFormatCustom } from 'components/CurrencyInput';
import { memo } from 'react';

type ReadOnlyCurrencyFieldProps = {
  value: any;
  label?: string;
  size?: 'small' | 'medium' | undefined;
  id: string;
  endAdornment?: any;
};

const ReadOnlyCurrencyField = ({ value, label, id, size = 'medium', endAdornment }: ReadOnlyCurrencyFieldProps) => {
  const finalValue = value > 0 ? value : 0;
  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        readOnly
        // @ts-ignore
        inputComponent={NumberFormatCustom}
        value={finalValue}
        startAdornment={<InputAdornment position='start'>$</InputAdornment>}
        label={label}
        size={size}
        endAdornment={<InputAdornment position='end'>{endAdornment}</InputAdornment>}
        disabled
      />
    </FormControl>
  );
};

export default memo(ReadOnlyCurrencyField);
