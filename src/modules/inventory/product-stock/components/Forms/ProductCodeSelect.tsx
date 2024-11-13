import { memo } from 'react';
import { FormAsyncSelectAutocompleteField, imageUrl } from '@dfl/mui-react-common';
import { Avatar, Checkbox, createFilterOptions, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IProduct } from 'modules/inventory/common/interfaces';
import { ProductService } from 'modules/inventory/product/services';
import { PRODUCTS_LIST_KEY } from 'modules/inventory/product/constants';

type ProductCodeSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IProduct) => option.code || '';

const renderOption = (props: any, option: IProduct, { selected }: any) => {
  return (
    <ListItem sx={{ p: 0, m: 0 }} {...props} key={option._id}>
      <ListItemAvatar>
        <Avatar variant='rounded' alt={option?.name} src={imageUrl(option?.media?.[0]?.thumb as string)}>
          P
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={option.code} secondary={option?.name} />
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
    </ListItem>
  );
};

const ProductCodeSelect = ({
  name,
  required,
  multiple,
  label,
  helperText,
  ...props
}: ProductCodeSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={ProductService.search}
      fetchValueFunc={ProductService.search}
      queryKey={PRODUCTS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      id='select-product-code'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      filterOptions={filterOptions}
    />
  );
};

export default memo(ProductCodeSelect);

const filterOptions = createFilterOptions({
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  stringify: (option: IProduct) => `${option?.name} ${option?.code} ${option?.brand}`,
});
