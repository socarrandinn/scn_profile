import { ApiClientService, EntityApiService, SearchResponseType } from '@dfl/react-security';

class GoogleAddressService extends EntityApiService<any> {
  googleAutocompleteService = (inputText?: string): Promise<SearchResponseType<any>> => {
    if (!inputText) {
      return new Promise(() => {});
    }

    return this.handleSearchResponse(
      ApiClientService.post(
        this.getPath(`/api/address/autocomplete?input=${inputText || ''}`),
        {},
        {
          headers: {
            'X-Goog-Api-Key': process.env.GOOGLE_PLACES_API_KEY as string,
            'X-Goog-FieldMask': 'adrFormatAddress,shortFormattedAddress,formattedAddress,location,addressComponents',
            'Content-Type': 'application/json',
          },
          ignoreSpace: true,
          ignoreToken: true,
        },
      ),
      10,
    );
  };

  googlePlacesService = async (apiKey: string, placeId?: string): Promise<any> => {
    if (!placeId) {
      return await new Promise(() => {});
    }

    return await this.handleResponse(
      ApiClientService.get(this.getPath(`/places/${placeId || ''}`), {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'adrFormatAddress,shortFormattedAddress,formattedAddress,location,addressComponents',
          'Content-Type': 'application/json',
        },
        ignoreSpace: true,
        ignoreToken: true,
      }),
    );
  };
}

export default new GoogleAddressService('https://places.googleapis.com/v1');
