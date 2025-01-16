import { memo, useCallback, useMemo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { IRole } from 'modules/security/roles/interfaces';
import { RoleService } from 'modules/security/roles/services';
import { ROLES_LIST_KEY } from 'modules/security/roles/constants/queries';
import { Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { ROLE_TYPE_ENUM, ROLE_TYPES_MAP } from '../../constants/role-provider.enum';

type SelectRoleProps = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
  required?: boolean;
  type?: ROLE_TYPE_ENUM;
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

const isOptionEqualToValue = (option: IRole, value: IRole) => {
  const optionId = option?.role || option?._id || option;
  const valueId = value?.role || value?._id || value;
  return optionId === valueId;
};

const SelectRole = ({ name, multiple, label, helperText, type, ...props }: SelectRoleProps) => {
  const roleType = useMemo(() => {
    return ROLE_TYPES_MAP[type as ROLE_TYPE_ENUM]
  }, [type]);

  const fetchFunc = useCallback(() => RoleService.searchRolesByType(roleType), [roleType]);

  const getOneFunc = useCallback((params?: any) => {
    return RoleService.getOneRoleByType(params, roleType)
  }, [roleType]);

  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      label={label}
      name={name}
      loadValue
      disableCloseOnSelect={multiple}
      fetchFunc={fetchFunc}
      fetchValueFunc={multiple ? fetchFunc : getOneFunc}
      queryKey={`${ROLES_LIST_KEY}_${roleType}`}
      autoHighlight
      id='select-roles'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );
};

export default memo(SelectRole);
