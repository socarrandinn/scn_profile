import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { AddressService } from 'modules/common/service';
import { ADDRESS_ADDRESS1_LIST_KEY } from 'modules/common/constants/address.queries';
import { FormAddressAutocompleteFieldProps, isOptionEqualToValue, renderLabel, renderOption } from './common';

const FormAddressAutocompleteAddress1Field = ({
  name,
  required,
  label,
  helperText,
  address,
  ...props
}: FormAddressAutocompleteFieldProps) => {
  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={false}
      required={required}
      label={label}
      name={name}
      fetchFunc={(params) => {
        return AddressService.searchAddress1({
          ...params,
          province: address?.state,
          municipality: address?.city || '',
        });
      }}
      fetchValueFunc={(code) =>
        AddressService.getOneMainStreet({
          state: address?.state as string,
          city: address?.city as string,
          address1: code || address?.address1,
        })
      }
      loadValue
      queryKey={ADDRESS_ADDRESS1_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      id={'select-address-1'}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      key={`select-address-1-${address?.state || 'state'}-${address?.city || 'city'}`}
    />
  );
};

export default memo(FormAddressAutocompleteAddress1Field);
