import { memo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { AddressService } from 'modules/common/service';
import { ADDRESS_CITY_LIST_KEY } from 'modules/common/constants/address.queries';
import { FormAddressAutocompleteFieldProps, isOptionEqualToValue, renderLabel, renderOption } from './common';

const FormAddressAutocompleteCityField = ({
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
      fetchFunc={() => AddressService.searchCity(address?.state as string)}
      queryKey={ADDRESS_CITY_LIST_KEY}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      id={'select-city'}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
      key={address?.state}
    />
  );
};

export default memo(FormAddressAutocompleteCityField);
