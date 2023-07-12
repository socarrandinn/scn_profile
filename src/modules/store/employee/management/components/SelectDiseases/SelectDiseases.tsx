import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';

import { EMPLOYEES_DISEASES_LIST_KEY } from 'modules/store/employee/management/constants';
import EmployeeDiseasesService from 'modules/store/employee/management/services/employee-diseases.service';

type SelectDiseasesProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const SelectDiseases = ({ name, required, multiple, label, placeholder, helperText }: SelectDiseasesProps) => {
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
      fetchFunc={EmployeeDiseasesService.searchInclude}
      queryKey={EMPLOYEES_DISEASES_LIST_KEY}
      autoHighlight
      id='select-Diseases'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(SelectDiseases);
