import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { IRole } from 'modules/security/roles/interfaces';
import { RoleProvidersService } from 'modules/security/roles/services';
import { Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { PRODUCT, SUPPLIER_ROLES_KEY } from 'modules/inventory/provider/supplier/constants';

type SelectSupplierRoleProps = {
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

const SelectSupplierRole = ({ name, multiple, label, placeholder, helperText }: SelectSupplierRoleProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      label={label}
      placeholder={placeholder}
      name={name}
      loadValue
      disableCloseOnSelect={multiple}
      fetchFunc={() => RoleProvidersService.getProviderRoles(PRODUCT)}
      queryKey={SUPPLIER_ROLES_KEY}
      autoHighlight
      id='select-supplier-roles'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );
};

export default memo(SelectSupplierRole);
