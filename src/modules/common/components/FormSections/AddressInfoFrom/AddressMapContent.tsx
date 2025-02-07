import { memo } from 'react';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import AddressMapForm from './cuban/AddressMapForm';
import AddressInternationalMapForm from './internacional/AddressInternationalMapForm';
type Props = {
  control: any;
  name?: string;
};

const AddressMapContent = ({ control, name }: Props) => {
  if (MS_LOCATION_CONFIG.isCuban) {
    return <AddressMapForm {...{ control, name }} />;
  }

  return <AddressInternationalMapForm {...{ control, name }} />;
};

export default memo(AddressMapContent);
