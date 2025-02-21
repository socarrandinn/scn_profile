import { ILocation } from 'modules/sales/settings/home-delivery/interfaces';
import { memo } from 'react';

type Props = {
  location: ILocation
};

const LocationCell = ({ location }: Props) => {
  return (
    <div>
      {location?.state}
    </div>
  )
};

export default memo(LocationCell);
