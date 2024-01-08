import { useEffect, useState } from 'react';
import { SelectAutocompleteField, FormFieldControl } from '@dfl/mui-react-common';
import {
  ILocationMunicipality,
  MUNICIPALITIES_BY_PROVINCE_CODE,
  findMunicipalityByStateAndMunicipality,
} from '@dfl/location';

type MunicipalityProps = {
  name?: string;
  size?: 'small' | 'medium' | undefined;
  label?: string;
  placeholder?: string;
  dark?: boolean;
  disabled?: boolean;
  value?: string;
  state?: string;
  onChange?: any;
};

const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option?.municipality || option;
  const valueId = value?.municipality || value;
  return optionId === valueId;
};

export const MunicipalitySelect = ({ name, value, state, onChange, disabled, ...props }: MunicipalityProps) => {
  const [innerValue, setValue] = useState<ILocationMunicipality | null>(
    findMunicipalityByStateAndMunicipality(state as string, value as string) || null,
  );

  const options = state ? MUNICIPALITIES_BY_PROVINCE_CODE[state] || [] : [];

  useEffect(() => {
    setValue((prevState) => {
      if (prevState && prevState?.state !== state) {
        onChange?.({ target: { value: null, name } });
        return null;
      }
      return findMunicipalityByStateAndMunicipality(state as string, value as string) || null;
    });
  }, [value, state, onChange, name]);

  const handleChange = (event: any) => {
    onChange?.({ target: { value: event?.target?.value?.municipality, name } });
  };

  return (
    <SelectAutocompleteField
      value={innerValue}
      onChange={handleChange}
      disabled={disabled || !state}
      // name={name}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={(option) => option?.name || ''}
      {...props}
      options={options}
    />
  );
};

const FormMunicipalitySelect = (props: any) => {
  return <FormFieldControl {...props} Component={MunicipalitySelect} />;
};

export default FormMunicipalitySelect;
