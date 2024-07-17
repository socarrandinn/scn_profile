import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { memo, useMemo } from 'react';
import { PROVINCES } from '@dfl/location';

type FromSelectProvinceProps = {
  name: string;
  label: string;
  disabled?: boolean;
};

const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option?.state || option;
  const valueId = value?.state || value;
  return optionId === valueId;
};

const FromSelectProvince = ({ name, label, disabled = false }: FromSelectProvinceProps) => {
  const options = useMemo(() => PROVINCES, []);

  return (
    <FormSelectAutocompleteField
      id={`select-state-${name}`}
      disabled={disabled}
      isOptionEqualToValue={isOptionEqualToValue}
      label={label}
      options={options}
      name={name}
      getOptionLabel={(option) => option?.name || ''}
    />
  );
};

export default memo(FromSelectProvince);
