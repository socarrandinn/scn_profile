import { LOCATION_TYPE } from 'modules/common/constants/location-type.enum';
import { ILocation } from 'modules/sales/settings/common/interfaces';
import { memo } from 'react';
import { getCountryByCode, getMunicipalityName, getProvinceByCode } from 'utils/location';

type Props = {
  location: ILocation | null;
};

const LocationCell = ({ location }: Props) => {
  if (!location) {
    return null;
  }

  let locationName = '';

  switch (location.type) {
    case LOCATION_TYPE.COUNTRY:
      locationName = getCountryByCode(location.country) || 'Unknown Country';
      break;
    case LOCATION_TYPE.STATE:
      locationName = getProvinceByCode(Number(location.state)) || location.state || 'Unknown State';
      break;
    case LOCATION_TYPE.CITY:
      locationName =
        getMunicipalityName(Number(location.state), Number(location.city)) || location.city || 'Unknown Municipality';
      break;
  }

  return <>{locationName}</>;
};

export default memo(LocationCell);
