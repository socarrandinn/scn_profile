import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { AddressService } from 'modules/common/service';
import { ADDRESS_ADDRESS1_LIST_KEY } from 'modules/common/constants/address.queries';
import { FormAddressAutocompleteFieldProps, isOptionEqualToValue, renderLabel, renderOption } from './common';
import { IAddress } from 'modules/common/interfaces';

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
      fetchFunc={() => AddressService.searchAddress1(address as IAddress)}
      fetchValueFunc={(code) =>
        AddressService.getOneMainStreet({
          state: address?.state as string,
          city: address?.city as string,
          address1: code,
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
      key={address?.city}
    />
  );
};

export default memo(FormAddressAutocompleteAddress1Field);
