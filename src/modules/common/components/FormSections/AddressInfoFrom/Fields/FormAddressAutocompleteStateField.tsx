import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { AddressService } from 'modules/common/service';
import { ADDRESS_STATE_LIST_KEY } from 'modules/common/constants/address.queries';
import { FormAddressAutocompleteFieldProps, isOptionEqualToValue, renderLabel, renderOption } from './common';

const FormAddressAutocompleteStateField = ({
  name,
  required,
  label,
  helperText,
  multiple,
  ...props
}: FormAddressAutocompleteFieldProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={false}
      required={required}
      label={label}
      name={name}
      fetchFunc={AddressService.searchState}
      fetchValueFunc={AddressService.getOneState}
      loadValue
      queryKey={ADDRESS_STATE_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      id={'select-state'}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(FormAddressAutocompleteStateField);
