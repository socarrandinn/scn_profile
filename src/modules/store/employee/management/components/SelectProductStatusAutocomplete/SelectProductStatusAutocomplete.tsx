import { SelectAutocompleteField } from '@dfl/mui-react-common';
import { SelectChangeEvent } from '@mui/material';

type Props = {
  dark?: boolean
  value?: string,
  helperText?: string,
  onChange?: (event: SelectChangeEvent<string>) => void
}

const status = ['Acivo', 'Inactivo'];

const SelectProductStatusAutocomplete = ({ value, onChange, dark, helperText }: Props) => {
  return (
    <SelectAutocompleteField
      label='Status'
      dark={dark}
      options={status.map((f) => ({ label: f, id: f }))}
      fullWidth={true}
      multiple={false}
      value={value}
      onChange={onChange}
      helperText={helperText}
    />
  );
};

export default SelectProductStatusAutocomplete;
