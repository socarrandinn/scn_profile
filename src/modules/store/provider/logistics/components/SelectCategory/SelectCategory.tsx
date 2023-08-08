import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { ICategory } from 'modules/store/settings/category/interfaces';
import { CategoryService } from 'modules/store/settings/category/services';
import { LOGISTICS_LIST_CATEGORY } from 'modules/store/provider/logistics/constants';

type SelectRoleProps = {
  name: string;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small'/>;
const checkedIcon = <CheckBoxIcon fontSize='small'/>;

const renderLabel = (option: ICategory) => option.name || '';

const renderOption = (props: any, option: ICategory, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected}/>
      {option.name}
    </li>
  );
};

const isOptionEqualToValue = (option: ICategory | any, value: ICategory | any) => {
  const optionId = option?.name || option?._id;
  const valueId = value?.name || value?._id;
  return optionId === valueId;
};

const SelectCategory = ({ name, multiple, label, placeholder, helperText }: SelectRoleProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      label={label}
      placeholder={placeholder}
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
