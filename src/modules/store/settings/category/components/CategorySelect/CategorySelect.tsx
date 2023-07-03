import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { ICategory } from 'modules/store/settings/category/interfaces';
import { CATEGORIES_LIST_KEY } from 'modules/store/settings/category/constants';
import { CategoryService } from 'modules/store/settings/category/services';

type CategorySelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: ICategory) => option.name || '';

const styleParent = {}
const styleChild = { paddingLeft: 50 }
const renderOption = (props: any, option: ICategory, { selected }: any) => {
  const style = option._id === option.parent ? styleParent : styleChild
  return (
        <li {...props} key={option._id as string} style={style}>
            <Checkbox style={{ marginRight: 8 }} checked={selected}/>
            {option.name}
        </li>
  );
};

const CategorySelect = ({ name, required, multiple, label, placeholder, helperText }: CategorySelectProps) => {
  return (
        <FormAsyncSelectAutocompleteField
            multiple={multiple}
            required={required}
            label={label}
            placeholder={placeholder}
            name={name}
            disableCloseOnSelect={multiple}
            fetchFunc={CategoryService.searchClean}
            queryKey={CATEGORIES_LIST_KEY}
            autoHighlight
            isOptionEqualToValue={isOptionEqualToValue}
            fieldValue={'_id'}
            loadValue
            fetchValueFunc={multiple ? CategoryService.searchClean : CategoryService.getOne}
            id='select-category'
            getOptionLabel={renderLabel}
            renderOption={renderOption}
            helperText={helperText}
        />
  );
};

export default memo(CategorySelect);
