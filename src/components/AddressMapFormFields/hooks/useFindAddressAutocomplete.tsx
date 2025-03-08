/**
 * @author: Angel Labrada Massó
 * @version: v0.0.1
 * @date:
 */
import { useQuery } from '@tanstack/react-query';
import GoogleAddressServices from 'components/AddressMapFormFields/services/google-address.services';

const GOOGLE_ADDRESS_AUTOCOMPLETE_QUERY_KEY = 'google-autocomplete';

const useFindAddressAutocomplete = (searchInput?: string) => {
  return useQuery({
    queryKey: [GOOGLE_ADDRESS_AUTOCOMPLETE_QUERY_KEY, searchInput],
    queryFn: () =>
      searchInput === '' ? new Promise(() => {}) : GoogleAddressServices.googleAutocompleteService(searchInput),
    // enabled: !!selectedPlaceId,
  });
};

export default useFindAddressAutocomplete;
