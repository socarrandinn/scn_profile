import { memo } from 'react';
import AddressMapForm from './cuban/AddressMapForm';
import AddressInternationalMapForm from './internacional/AddressInternationalMapForm';
// import AddressInfoForm from './AddressInfoForm';
type Props = {
  control: any;
  countryCode: string;
  name?: string;
  disabledLocation?: boolean;
};

const AddressMapContent = ({ control, name, disabledLocation, countryCode }: Props) => {
  if (countryCode === 'CU') {
    return <AddressMapForm {...{ control, name, disabledLocation }} countryCode={countryCode} />;
  }

  return <AddressInternationalMapForm {...{ control, name, disabledLocation }} />;
};

export default memo(AddressMapContent);
