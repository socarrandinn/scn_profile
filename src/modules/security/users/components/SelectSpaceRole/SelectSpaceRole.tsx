import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { IRole } from 'modules/security/roles/interfaces';
import { RoleService } from 'modules/security/roles/services';
import { ROLES_LIST_KEY } from 'modules/security/roles/constants/queries';
import { Checkbox } from '@mui/material';

type SelectSpaceRoleProps = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IRole) => option.name || '';

const renderOption = (props: any, option: IRole, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const SelectSpaceRole = ({ name, multiple, label, helperText, ...props }: SelectSpaceRoleProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={RoleService.search}
      queryKey={ROLES_LIST_KEY}
      autoHighlight
      id='select-roles'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(SelectSpaceRole);
