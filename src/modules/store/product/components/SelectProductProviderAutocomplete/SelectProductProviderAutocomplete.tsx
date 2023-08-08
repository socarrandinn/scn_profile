import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { IProductProvider } from 'modules/store/common/interfaces';
import ProductProviderService from 'modules/store/common/services/productProviderService';

type ProductProviderSelectProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  multiple?: boolean;
};

const renderLabel = (option: IProductProvider) => option.name || '';

const renderOption = (props: any, option: IProductProvider, { selected }: any) => {
  return (
    <li {...props} key={option._id}>
      <Checkbox style={{ marginRight: 8 }} checked={selected} />
      {option.name}
    </li>
  );
};

const ProductProviderSelect = ({
  name,
  required,
  multiple,
  label,
  placeholder,
  helperText,
}: ProductProviderSelectProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      multiple={multiple}
      required={required}
      label={label}
      placeholder={placeholder}
      name={name}
      disableCloseOnSelect={multiple}
      fetchFunc={ProductProviderService.search}
      queryKey={'key'}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      loadValue
      fetchValueFunc={multiple ? ProductProviderService.search : ProductProviderService.getOne}
      id='select-product-provider'
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(ProductProviderSelect);
