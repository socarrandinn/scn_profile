import { memo, useMemo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { AddressService } from 'modules/common/service';
import { ADDRESS_ADDRESS2_LIST_KEY } from 'modules/common/constants/address.queries';
import { FormAddressAutocompleteFieldProps, isOptionEqualToValue, renderLabel, renderOption } from './common';
import { OperatorFilter, TermFilter } from '@dofleini/query-builder';

const FormAddressAutocompleteAddress2Field = ({
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
      fetchFunc={(params) =>
        AddressService.searchAddress2({
          ...params,
          province: address?.state,
          municipality: address?.city,
          mainStreet: address?.address1,
        })
      }
      fetchValueFunc={(code) =>
        AddressService.getOneStreet({
          state: address?.state as string,
          city: address?.city as string,
          address1: address?.address1 as string,
          address2: code,
        })
      }
      loadValue
      queryKey={ADDRESS_ADDRESS2_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      id={'select-address-2'}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      key={`select-address-2-${address?.address1 || 'main-street'}-${address?.state || 'state'}-${
        address?.city || 'city'
      }`}
    />
  );
};

export default memo(FormAddressAutocompleteAddress2Field);
