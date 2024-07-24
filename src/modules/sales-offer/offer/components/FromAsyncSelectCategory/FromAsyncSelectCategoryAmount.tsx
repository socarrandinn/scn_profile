import { memo, useMemo } from 'react';
import { Avatar, Checkbox, ListItemAvatar, ListItemText } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { FetchOption, FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { CategoryService } from 'modules/inventory/settings/category/services';
import { OFFERS_CATEGORY_RULE_LIST_KEY } from '../../constants';
import { ICategory } from 'modules/inventory/product/interfaces/IProductCreate';
import { getFullUrl } from 'utils/index';

type FromAsyncSelectCategoryAmountProps = {
  name: string;
  placeholder?: string;
  helperText?: string;
  fetchOption?: FetchOption;
  label?: string;
  multiple?: boolean;
  disabled?: boolean;
};

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const isOptionEqualToValue = (option: any, value: any) => {
  const optionId = option?._id || option;
  const valueId = value?._id || value;
  return optionId === valueId;
};

const FromAsyncSelectCategoryAmount = ({
  name,
  multiple,
  disabled = false,
  label,
  helperText,
  ...props
}: FromAsyncSelectCategoryAmountProps) => {
  const filters = useMemo(
    () => ({
      type: 'TERM',
      field: 'visible',
      value: true,
    }),
    [],
  );

  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      disabled={disabled}
      name={name}
      fetchOption={{ filters }}
      fetchFunc={CategoryService.search}
      fetchValueFunc={CategoryService.search}
      loadValue
      disableCloseOnSelect={multiple}
      label={label}
      fieldValue={'_id'}
      queryKey={OFFERS_CATEGORY_RULE_LIST_KEY}
      helperText={helperText}
      autoHighlight
      id={`multiple-${name}`}
      isOptionEqualToValue={isOptionEqualToValue}
      getOptionLabel={(option: ICategory) => option?.name || ''}
      renderOption={(props, option: ICategory, { selected }) => (
        <li {...props} key={option?._id} value={option?._id}>
          <ListItemAvatar>
            <Avatar variant='rounded' alt={option?.name} src={getFullUrl(option?.image as string)}>
              C
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={option?.name} />
          <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
        </li>
      )}
    />
  );
};

export default memo(FromAsyncSelectCategoryAmount);
