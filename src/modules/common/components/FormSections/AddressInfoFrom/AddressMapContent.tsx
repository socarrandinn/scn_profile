import { memo } from 'react';
import AddressMapForm from './cuban/AddressMapForm';
import AddressInternationalMapForm from './internacional/AddressInternationalMapForm';
import { UseFormClearErrors } from 'react-hook-form';

type Props = {
  control: any;
  countryCode: string;
  name?: string;
  disabledLocation?: boolean;
  clearErrors: UseFormClearErrors<any>;
};

const AddressMapContent = ({ control, name, disabledLocation, countryCode, clearErrors }: Props) => {
  if (countryCode === 'CU') {
    return <AddressMapForm {...{ control, name, disabledLocation }} countryCode={countryCode} />;
  }

  return (
    <AddressInternationalMapForm
      {...{ control, name, disabledLocation }}
      clearErrors={clearErrors}
      countryCode={countryCode}
    />
  );
};

export default memo(AddressMapContent);
