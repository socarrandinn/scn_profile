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
  const filters = useMemo(() => {
    const provinceFilters = new TermFilter({
      field: 'province.code',
      value: address?.state ? +address?.state : null,
      objectId: false,
      isDate: false,
    });
    const municipalityFilters = new TermFilter({
      field: 'municipality.code',
      value: address?.city ? +address?.city : null,
      objectId: false,
      isDate: false,
    });
    const mainStreetFilters = new TermFilter({
      field: 'mainStreet.code',
      value: address?.address1 ? +address?.address1 : null,
      objectId: false,
      isDate: false,
    });

    return new OperatorFilter({
      type: 'AND',
      filters: [provinceFilters, municipalityFilters, mainStreetFilters],
    })?.toQuery();
  }, [address?.address1, address?.city, address?.state]);

  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={false}
      required={required}
      label={label}
      name={name}
      fetchFunc={(params) => AddressService.searchAddress2({ ...params, filters })}
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
