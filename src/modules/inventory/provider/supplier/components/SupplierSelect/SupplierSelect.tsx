import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { ISupplier } from 'modules/inventory/provider/supplier/interfaces';
import { SUPPLIER_LIST_KEY } from 'modules/inventory/provider/supplier/constants';
import { SupplierService } from 'modules/inventory/provider/supplier/services';

type ProductsSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
  size?: 'medium' | 'small';
};

const renderLabel = (option: ISupplier) => option.name || '';

const renderOption = (props: any, option: ISupplier, { selected }: any) => {
  return (
    <li {...props} key={option._id as string}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const SupplierSelect = ({
  name,
  required,
  multiple,
  label,
  helperText,
  size = 'medium',
  ...props
}: ProductsSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={multiple}
      required={required}
      label={label}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={SupplierService.search}
      queryKey={SUPPLIER_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? SupplierService.search : SupplierService.getOne}
      id='select-products'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      size={size}
    />
  );
};

export default memo(SupplierSelect);
