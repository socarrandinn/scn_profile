import { memo, useMemo } from 'react';
import { FormAsyncSelectAutocompleteField } from '@dfl/mui-react-common';
import { Checkbox } from '@mui/material';
import { isOptionEqualToValue } from 'utils/comparing';
import { AddressService } from 'modules/common/service';
import { IAddress } from 'modules/common/interfaces';
import { ADDRESS_LIST } from 'modules/common/constants/address.queries';
import { mapAddressToParams } from 'utils/address';
import { SearchResponseType } from '@dfl/react-security';

type VariantProps = keyof Pick<IAddress, 'country' | 'state' | 'city' | 'address1' | 'address2'>;

type FormAddressAutocompleteFieldProps = {
  name: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  helperText?: string;
  address?: Partial<IAddress>;
  variant: VariantProps;
};

const renderLabel = (option: string): string => option || '';

const renderOption = (
  props: React.HTMLAttributes<HTMLLIElement>,
  option: string,
  { selected }: { selected: boolean },
): JSX.Element => (
  <li {...props} key={option}>
    <Checkbox style={{ marginRight: 8 }} checked={selected} />
    {option}
  </li>
);

const Service: Record<VariantProps, (params: any) => Promise<SearchResponseType<string[]>>> = {
  country: AddressService.searchCurrency,
  state: AddressService.searchState,
  city: AddressService.searchCity,
  address1: AddressService.searchAddress1,
  address2: AddressService.searchAddress2,
};

const Params: Record<VariantProps, Array<keyof IAddress>> = {
  country: [],
  state: ['country'],
  city: ['country', 'state'],
  address1: ['country', 'state', 'city'],
  address2: ['country', 'state', 'city', 'address1'],
};

const FormAddressAutocompleteField = ({
  name,
  required,
  label,
  helperText,
  variant = 'country',
  address,
  ...props
}: FormAddressAutocompleteFieldProps) => {
  const serviceSearch = Service[variant];

  const paramSearch = useMemo(() => {
    return address ? mapAddressToParams(address, Params[variant]) : {};
  }, [address, variant]);

  return (
    <FormAsyncSelectAutocompleteField
      {...props}
      multiple={false}
      required={required}
      label={label}
      name={name}
      fetchFunc={() => serviceSearch(paramSearch)}
      queryKey={ADDRESS_LIST + variant}
      autoHighlight
      isOptionEqualToValue={isOptionEqualToValue}
      fieldValue={'_id'}
      // loadValue
      fetchValueFunc={AddressService.getOne}
      id={`select-${variant}`}
      getOptionLabel={renderLabel}
      renderOption={renderOption}
      helperText={helperText}
    />
  );
};

export default memo(FormAddressAutocompleteField);
