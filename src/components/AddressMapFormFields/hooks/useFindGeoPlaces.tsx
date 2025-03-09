/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import { useQuery } from '@tanstack/react-query';
import GoogleAddressServices from 'components/AddressMapFormFields/services/google-address.services';

const GOOGLE_PLACES_QUERY_KEY = 'google-places';

const useFindGeoPlaces = (selectedPlaceId?: string) => {
  return useQuery({
    queryKey: [GOOGLE_PLACES_QUERY_KEY, selectedPlaceId],
    queryFn: () =>
      selectedPlaceId === ''
        ? new Promise(() => {})
        : GoogleAddressServices.googlePlacesService(process.env.REACT_APP_GOOGLE_PLACES_API_KEY || '', selectedPlaceId),
    enabled: !!selectedPlaceId,
  });
};

export default useFindGeoPlaces;
