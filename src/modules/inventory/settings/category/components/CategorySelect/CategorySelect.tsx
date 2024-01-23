import { memo } from 'react';
import { ConditionContainer, FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { ICategory } from 'modules/inventory/settings/category/interfaces';
import { CATEGORIES_LIST_CLEAN } from 'modules/inventory/settings/category/constants';
import { CategoryService } from 'modules/inventory/settings/category/services';
import { useSearchParamsCategoryParentId } from 'modules/inventory/settings/category/hooks/useSearchParamsCategoryParentId';

type CategorySelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: ICategory) => option.name || '';

const styleParent = {};
const styleChild = { paddingLeft: 50 };
const renderOption = (props: any, option: ICategory, { selected }: any, parentId: string) => {
  const style = option._id === option.parent ? styleParent : styleChild;

  return (
    <ConditionContainer active={parentId !== option._id} alternative={null}>
      <li {...props} key={option._id as string} style={style}>
        <Checkbox style={{ marginRight: 8 }} checked={selected} />
        {option.name}
      </li>
    </ConditionContainer>
  );
};

const CategorySelect = ({ name, required, multiple, label, placeholder, helperText }: CategorySelectProps) => {
  const parentId = useSearchParamsCategoryParentId();

  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={CategoryService.searchClean}
      queryKey={CATEGORIES_LIST_CLEAN}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? CategoryService.searchClean : CategoryService.getOne}
      id='select-category'
      getOptionLabel={renderLabel}
      renderOption={(props, option, { selected }) => renderOption(props, option, { selected }, parentId as string)}
      helperText={helperText}
    />
  );
};

export default memo(CategorySelect);
