import { memo, useState } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { IRole } from 'modules/security/roles/interfaces';
import { RoleService } from 'modules/security/roles/services';
import { ROLES_LIST_KEY } from 'modules/security/roles/constants/queries';
import { Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

type SelectRoleProps = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const renderLabel = (option: IRole) => option.name || '';

const renderOption = (props: any, option: IRole, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const isOptionEqualToValue = (option: IRole | any, value: IRole | any) => {
  const optionId = option?.role || option?._id || option;
  const valueId = value?.role || value?._id || value;
  return optionId === valueId;
};

const SelectRole = ({ name, multiple, label, placeholder, helperText }: SelectRoleProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [autocompleteVal, setAutocompleteVal] = useState([]); // No uncontrolled error

  console.log('Roles: ', autocompleteVal);
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      label={label}
      placeholder={placeholder}
      name={name}
      loadValue
      disableCloseOnSelect={multiple}
      fetchFunc={RoleService.search}
      queryKey={ROLES_LIST_KEY}
      autoHighlight
      id='select-roles'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      isOptionEqualToValue={isOptionEqualToValue}
      onChange={(e: any, newVal: []) => {
        setAutocompleteVal(newVal);
      }}
    />
  );
};

export default memo(SelectRole);
