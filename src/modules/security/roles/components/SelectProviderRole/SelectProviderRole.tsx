import { memo, useMemo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { IRole } from 'modules/security/roles/interfaces';
import { RoleProvidersService } from 'modules/security/roles/services';
import { ROLES_PROVIDERS_LIST_KEY } from 'modules/security/roles/constants/queries';
import { Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { ROLE_PROVIDER_TYPE_ENUM } from '../../constants/role-provider.enum';
import { TermFilter } from '@dofleini/query-builder';

type SelectProviderRoleProps = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
  disabled?: boolean;
  type?: ROLE_PROVIDER_TYPE_ENUM | null;
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

const SelectProviderRole = ({
  name,
  multiple,
  label,
  helperText,
  type,
  disabled,
  ...props
}: SelectProviderRoleProps) => {
  const filters = useMemo(() => new TermFilter({ field: 'type', value: type }), [type]);

  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      disabled={disabled}
      label={label}
      name={name}
      loadValue
      disableCloseOnSelect={multiple}
      fetchFunc={RoleProvidersService.search}
      fetchOption={{ filters }}
      queryKey={`${ROLES_PROVIDERS_LIST_KEY}-${type || ''}`}
      autoHighlight
      id='select-roles-providers'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );
};

export default memo(SelectProviderRole);
