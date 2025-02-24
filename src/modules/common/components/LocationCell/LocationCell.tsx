import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { ILocation } from 'modules/sales/settings/home-delivery/interfaces';
import { memo } from 'react';
import { getMunicipalityName, getProvinceByCode } from 'utils/location';

type Props = {
  location: ILocation
};

const LocationCell = ({ location }: Props) => {
  return (
    <div>
      {location?.type === LOCATION_TYPE.STATE && getProvinceByCode(Number(location?.state))}
      {location?.type === LOCATION_TYPE.CITY && getMunicipalityName(Number(location?.state), Number(location?.city))}
    </div>
  )
};

export default memo(LocationCell);
