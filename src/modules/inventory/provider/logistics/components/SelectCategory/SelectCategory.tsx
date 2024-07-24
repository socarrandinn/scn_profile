import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { ICategory } from 'modules/inventory/settings/category/interfaces';
import { CategoryService } from 'modules/inventory/settings/category/services';
import { LOGISTICS_LIST_CATEGORY } from 'modules/inventory/provider/logistics/constants';
import { isOptionEqualToValue } from 'utils/comparing';

type SelectRoleProps = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const renderLabel = (option: ICategory) => option.name || '';

const renderOption = (props: any, option: ICategory, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const SelectCategory = ({ name, multiple, label, helperText, ...props }: SelectRoleProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={CategoryService.search}
      queryKey={LOGISTICS_LIST_CATEGORY}
      autoHighlight
      id='select-categories'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      isOptionEqualToValue={isOptionEqualToValue}
    />
  );
};

export default memo(SelectCategory);
