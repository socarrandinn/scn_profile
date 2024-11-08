import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox, ListItem, ListItemText } from '@mui/material';
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
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      <ListItemText primary={option.code} secondary={option?.name} />
    </ListItem>
  );
};

const ProductCodeSelect = ({
  name,
  required,
  multiple,
  label,
  helperText,
  placeholder,
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
      queryKey={PRODUCTS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? ProductService.search : ProductService.getOne}
      id='select-product-code'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(ProductCodeSelect);
