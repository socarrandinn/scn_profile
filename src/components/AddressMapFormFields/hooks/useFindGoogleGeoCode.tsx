/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import { useQuery } from '@tanstack/react-query';
import GoogleMapsServices from 'components/AddressMapFormFields/services/google-maps.services';

const GOOGLE_GEO_CODE_QUERY_KEY = 'google-geocode';

const useFindGoogleGeoCode = (lat?: number, lng?: number, countryCode?: string) => {
  return useQuery({
    queryKey: [GOOGLE_GEO_CODE_QUERY_KEY, lat, lng, countryCode],
    queryFn: () => GoogleMapsServices.googleGeoCodeService(process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '', lat, lng),
    enabled: !!lat && !!lng && countryCode !== 'CU',
  });
};

export default useFindGoogleGeoCode;
