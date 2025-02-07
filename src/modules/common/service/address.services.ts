import { ApiClientService, EntityApiService, SearchResponseType } from '@dfl/react-security';
import { IAddress } from '../interfaces';
import { MS_LOCATION_CONFIG } from 'settings/address-location';

const addConfig = (config: any) => {
  return {
    ...config,
    headers: MS_LOCATION_CONFIG?.headers || {},
    ignoreSpace: true,
  };
};

class AddressService extends EntityApiService<IAddress> {
  searchCurrency = (params?: any, config?: any): Promise<SearchResponseType<any>> => {
    return this.handleResponse(ApiClientService.post(this.getPath('/currency'), params, config));
  };

  searchState = (): Promise<any> => {
    return this.handleSearchResponse(ApiClientService.get(this.getPath('/provinces'), addConfig({})), 10);
  };

  searchCity = (state: string): Promise<SearchResponseType<any>> => {
    if (state) {
      return this.handleSearchResponse(
        ApiClientService.get(this.getPath(`/provinces/${state}/municipalities`), addConfig({})),
        10,
      );
    }
    return Promise.reject(new Error('You must need a state code'));
  };

  searchAddress1 = (address: Pick<IAddress, 'state' | 'city'>): Promise<SearchResponseType<any>> => {
    if (address?.city && address?.state) {
      return this.handleSearchResponse(
        ApiClientService.get(
          this.getPath(`/provinces/${address?.state}/municipalities/${address?.city}`),
          addConfig({}),
        ),
        10,
      );
    }
    return Promise.reject(new Error('You must need a country, state and city code'));
  };

  searchAddress2 = (address: Pick<IAddress, 'state' | 'city' | 'address1'>): Promise<SearchResponseType<any>> => {
    if (address?.city && address?.address1 && address?.state) {
      const { state, city, address1 } = address;
      return this.handleSearchResponse(
        ApiClientService.get(
          this.getPath(`/provinces/${state}/municipalities/${city}/main-street/${address1}`),
          addConfig({}),
        ),
        10,
      );
    }
    return Promise.reject(new Error('You must need a country, state, city and address1 code'));
  };
}

export default new AddressService(MS_LOCATION_CONFIG.url);
