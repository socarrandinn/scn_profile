import { FormAsyncSelectAutocompleteField, imageUrl } from '@dfl/mui-react-common';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Avatar, Checkbox, ListItemAvatar, ListItemText, createFilterOptions } from '@mui/material';
import { IProduct } from 'modules/inventory/common/interfaces';
import { ProductService } from 'modules/inventory/product/services';
import { memo } from 'react';

type ProductDiscountProductPickerProps = {
  name: string;
  label?: string;
  placeholder: string;
};

const isOptionEqualToValue = (option: any, value: any | string) => {
  const optionId = option?._id || option;
  const valueId = value?._id || value;
  return optionId === valueId;
};

const filterOptions = createFilterOptions({
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  stringify: (option: IProduct) => `${option?.name} ${option?.code} ${option?.brand}`,
});

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const ProductDiscountProductPicker = ({ name, label, ...props }: ProductDiscountProductPickerProps) => {
  return (
    <>
      <FormAsyncSelectAutocompleteField
        {...props}
        name={name}
        id={`multiple-${name}`}
        label={label || ''}
        autoComplete
        multiple={true}
        includeInputInList={true}
        fetchFunc={ProductService.search}
        fetchValueFunc={ProductService.search}
        loadValue
        queryKey={'products'}
        autoHighlight
        filterOptions={filterOptions}
        isOptionEqualToValue={isOptionEqualToValue}
        getOptionLabel={(option: any) => option?.name || ''}
        renderOption={(props, option: IProduct, { selected }) => (
          <li {...props} key={option?._id}>
            <ListItemAvatar>
              <Avatar variant='rounded' alt={option?.name} src={imageUrl(option?.media?.[0]?.thumb as string)}>
                P
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={option?.name} />
            <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
          </li>
        )}
        freeSolo
        filterSelectedOptions
        disableCloseOnSelect
        required
      />
    </>
  );
};

export default memo(ProductDiscountProductPicker);
