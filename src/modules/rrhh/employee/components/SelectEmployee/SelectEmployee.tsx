import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { WorkLocationService } from 'modules/rrhh/settings/work-location/services';
import { WORK_LOCATIONS_LIST_KEY } from 'modules/rrhh/settings/work-location/constants';
import { IWorkLocation } from 'modules/rrhh/settings/work-location/interfaces';
import { IEmployee } from 'modules/rrhh/employee/interfaces';
import { EmployeeService } from 'modules/rrhh/employee/services';
import { EMPLOYEES_LIST_KEY } from 'modules/rrhh/employee/constants';
import { isOptionEqualToValue } from 'utils/comparing';

type SelectEmployeeProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IEmployee) => option?.general?.firstName || 'manolo' || '';

const renderOption = (props: any, option: IEmployee, { selected }: any) => {
  return (
        <li {...props} key={option._id}>
            <Checkbox style={{ marginRight: 8 }} checked={selected}/>
            {option?.general?.firstName}
        </li>
  );
};

const SelectEmployee = ({ name, required, multiple, label, placeholder, helperText }: SelectEmployeeProps) => {
  return (
        <FormAsyncSelectAutocompleteField
            multiple={multiple}
            required={required}
            label={label}
            placeholder={placeholder}
            name={name}
            isOptionEqualToValue={isOptionEqualToValue}
            disableCloseOnSelect={multiple}
            fetchFunc={EmployeeService.search}
            queryKey={EMPLOYEES_LIST_KEY}
            autoHighlight
            // fieldValue={'_id'}
            // loadValue
            // fetchValueFunc={multiple ? EmployeeService.search : EmployeeService.getOne}
            id='select-employee'
            getOptionLabel={renderLabel}
            renderOption={renderOption}
            helperText={helperText}
        />
  );
};

export default memo(SelectEmployee);
