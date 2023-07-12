import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { EMPLOYEES_ALLERGIES_LIST_KEY } from 'modules/store/employee/management/constants';
import EmployeeAllergiesService from 'modules/store/employee/management/services/employee-allergies.service';

type SelectAllergiesProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const SelectAllergies = ({ name, required, multiple, label, placeholder, helperText }: SelectAllergiesProps) => {
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
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={EmployeeAllergiesService.searchInclude}
      queryKey={EMPLOYEES_ALLERGIES_LIST_KEY}
      autoHighlight
      id='select-Allergies'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(SelectAllergies);
