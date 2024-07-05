import { FormSelectAutocompleteField } from '@dfl/mui-react-common';
import { memo } from 'react';
import { Checkbox } from '@mui/material';

type ProductTagTypeArraySelectProps = {
  name: string;
  label: string;
  multiple?: boolean;
  required?: boolean;
  options: string[];
};

export const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option;
  const valueId = value;
  return optionId === valueId;
};

const ProductTagTypeArraySelect = ({
  label,
  name,
  options = [],
  multiple = false,
  required,
}: ProductTagTypeArraySelectProps) => {
  const renderLabel = (option: string) => option;

  const renderOption = (props: any, option: string, { selected }: any) => {
    return (
      <li {...props} key={option}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {option}
      </li>
    );
  };

  return (
    <FormSelectAutocompleteField
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      id='select-tag'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      name={name}
      label={required ? `${label}*` : label}
      options={options}
      multiple={multiple}
      disableCloseOnSelect={multiple}
    />
  );
};

export default memo(ProductTagTypeArraySelect);
