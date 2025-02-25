import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { memo, useMemo } from 'react';
import { PROVINCES } from '@dfl/location';
import { Checkbox, ListItemText } from '@mui/material';

type FromSelectProvinceProps = {
  name: string;
  placeholder?: string;
  label: string;
  disabled?: boolean;
  multiple?: boolean;
};

const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option?.state || option;
  const valueId = value?.state || value;
  return optionId === valueId;
};
const renderOption = (props: any, option: any, { selected }: any) => {
  return (
    <li {...props} key={option.name}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      <ListItemText primary={option?.name} />
    </li>
  );
};

const FormSelectProvince = ({ name, label, disabled = false, multiple, ...props }: FromSelectProvinceProps) => {
  const options = useMemo(() => PROVINCES, []);

  return (
    <FormSelectAutocompleteField
      {...props}
      multiple={multiple}
      selectOnFocus
      id={`select-state-${name}`}
      disabled={disabled}
      isOptionEqualToValue={isOptionEqualToValue}
      label={label}
      options={options}
      name={name}
      renderOption={renderOption}
      getOptionLabel={(option) => option?.name || ''}
    />
  );
};

export default memo(FormSelectProvince);
