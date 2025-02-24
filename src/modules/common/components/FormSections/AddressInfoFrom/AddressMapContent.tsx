import { memo } from 'react';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import AddressMapForm from './cuban/AddressMapForm';
import AddressInternationalMapForm from './internacional/AddressInternationalMapForm';
// import AddressInfoForm from './AddressInfoForm';
type Props = {
  control: any;
  name?: string;
  disabledLocation?: boolean;
};

const AddressMapContent = ({ control, name, disabledLocation }: Props) => {
  if (MS_LOCATION_CONFIG.isCuban) {
    return <AddressMapForm {...{ control, name, disabledLocation }} />;
  }

  return <AddressInternationalMapForm {...{ control, name, disabledLocation }} />;
};

export default memo(AddressMapContent);
