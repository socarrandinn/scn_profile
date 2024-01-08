import { useEffect, useState } from 'react';
import { SelectAutocompleteField, FormFieldControl } from '@dfl/mui-react-common';
import { PROVINCES, findProvinceByStateCode, ILocationProvince } from '@dfl/location';

type ProvinceProps = {
  name?: string;
  size?: 'small' | 'medium' | undefined;
  label?: string;
  placeholder?: string;
  dark?: boolean;
  value?: string;
  onChange?: any;
};

const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option?.state || option;
  const valueId = value?.state || value;
  return optionId === valueId;
};

const enabledProvinces = PROVINCES;

export const ProvinceSelect = ({ name, value, onChange, ...props }: ProvinceProps) => {
  const [innerValue, setValue] = useState<ILocationProvince | null>(findProvinceByStateCode(value as string) || null);

  useEffect(() => {
    setValue(findProvinceByStateCode(value as string) || null);
  }, [value]);

  const handleChange = (event: any) => {
    onChange?.({ target: { value: event?.target?.value?.state, name } });
  };

  return (
    <SelectAutocompleteField
      value={innerValue}
      onChange={handleChange}
      // name={name}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={(option) => option?.name || ''}
      {...props}
      options={enabledProvinces}
    />
  );
};

const FormProvinceSelect = (props: any) => {
  return <FormFieldControl {...props} Component={ProvinceSelect} />;
};

export default FormProvinceSelect;
