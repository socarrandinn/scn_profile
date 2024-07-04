import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IProductDiscount } from 'modules/sales-offer/product-discount/interfaces';
import { PRODUCT_DISCOUNTS_LIST_KEY } from 'modules/sales-offer/product-discount/constants';
import { ProductDiscountService } from 'modules/sales-offer/product-discount/services';

type ProductDiscountSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IProductDiscount) => option.name || '';

const renderOption = (props: any, option: IProductDiscount, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const ProductDiscountSelect = ({ name, required, multiple, label, placeholder, helperText }: ProductDiscountSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={ProductDiscountService.search}
      queryKey={PRODUCT_DISCOUNTS_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? ProductDiscountService.search : ProductDiscountService.getOne}
      id='select-product-discount'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(ProductDiscountSelect);
