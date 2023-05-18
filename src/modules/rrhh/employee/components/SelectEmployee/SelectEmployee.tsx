import { memo } from 'react';
import { Checkbox, ListItemText } from '@mui/material';
import { IEmployee } from 'modules/rrhh/employee/interfaces';
import { EmployeeService } from 'modules/rrhh/employee/services';
import { EMPLOYEES_LIST_KEY } from 'modules/rrhh/employee/constants';
import { isOptionEqualToValue } from 'utils/comparing';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';

type SelectEmployeeProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IEmployee) => option?.general?.firstName || '';

const renderOption = (props: any, option: IEmployee, { selected }: any) => {
  return (
        <li {...props} key={option._id}>
            <Checkbox style={{ marginRight: 8 }} checked={selected}/>
            {/* <ListItemAvatar> */}
            {/*    <Avatar alt={option?.general?.firstName} src={'option.avatar'} /> */}
            {/* </ListItemAvatar> */}
            <ListItemText primary={option?.general?.firstName}
                          secondary={option?.jobInformation?.position?.name || ''}/>
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
            fieldValue={'_id'}
            loadValue
            fetchValueFunc={multiple ? EmployeeService.search : EmployeeService.getOne}
            id={`select-employee-${name}`
            }
            getOptionLabel={renderLabel}
            renderOption={renderOption}
            helperText={helperText}
        />
  );
};

export default memo(SelectEmployee);
