import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { ICategory } from 'modules/rrhh/settings/category/interfaces';
import { CATEGORIES_LIST_KEY } from 'modules/rrhh/settings/category/constants';
import { CategoryService } from 'modules/rrhh/settings/category/services';

type SelectSelectCategoryProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: ICategory) => option.name || '';

const renderOption = (props: any, option: ICategory, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const SelectCategory = ({ name, required, multiple, label, placeholder, helperText }: SelectSelectCategoryProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={CategoryService.search}
      queryKey={CATEGORIES_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? CategoryService.search : CategoryService.getOne}
      id='select-caetgory'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(SelectCategory);
