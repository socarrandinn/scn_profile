import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { ILocation } from 'modules/sales/settings/home-delivery/interfaces';
import { memo } from 'react';
import { getCountryByCode, getMunicipalityName, getProvinceByCode } from 'utils/location';

type Props = {
  location: ILocation
};

const LocationCell = ({ location }: Props) => {
  return (
    <div>
      {location?.type === LOCATION_TYPE.COUNTRY && getCountryByCode(location?.country)}
      {location?.type === LOCATION_TYPE.STATE && getProvinceByCode(Number(location?.state))}
      {location?.type === LOCATION_TYPE.MUNICIPALITY && getMunicipalityName(Number(location?.state), Number(location?.city))}
    </div>
  )
};

export default memo(LocationCell);
