import { memo } from 'react';
import { MS_LOCATION_CONFIG } from 'settings/address-location';
import AddressMapForm from './AddressMapForm';
type Props = {
  control: any;
  name?: string;
};

const AddressMapContent = ({ control, name }: Props) => {
  if (MS_LOCATION_CONFIG.isCuban) {
    return <AddressMapForm {...{ control, name }} />;
  }

  return <div>OTOR PAIS</div>;
};

export default memo(AddressMapContent);
