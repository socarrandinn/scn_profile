import { memo } from 'react';
import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { findProvinceByStateCode, ILocationProvince, PROVINCES } from '@dfl/location';

type StoreSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: any) => findProvinceByStateCode(option.state || option)?.name as string

const renderOption = (props: any, option: ILocationProvince, { selected }: any) => {
  return (
        <li {...props} key={option.state}>
            <Checkbox style={{ marginRight: 8 }} checked={selected}/>
            {option.name}
        </li>
  );
};

export const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option?.state || option;
  const valueId = value?.state || value;
  return optionId === valueId;
};

const ProvinceSelect2 = ({ name, required, multiple, label, placeholder, helperText }: StoreSelectProps) => {
  return (
            <FormSelectAutocompleteField
                multiple={multiple}
                required={required}
                label={label}
                placeholder={placeholder}
                name={name}
                disableCloseOnSelect={multiple}
                options={PROVINCES}
                autoHighlight
                isOptionEqualToValue={isOptionEqualToValue}
                fieldValue={'state'}
                id='select-store'
                getOptionLabel={renderLabel}
                renderOption={renderOption}
                helperText={helperText}
            />
  );
};

export default memo(ProvinceSelect2);
