import { ApiClientService, EntityApiService, SearchResponseType } from '@dfl/react-security';
import { IAddress } from '../interfaces';
import { MS_LOCATION_CONFIG } from 'settings/address-location';

const addConfig = (config: any) => {
  return {
    ...config,
    headers: MS_LOCATION_CONFIG?.headers || {},
    ignoreSpace: true,
    ignoreToken: true,
  };
};

class AddressService extends EntityApiService<IAddress> {
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

  searchAddress1 = (params: any): Promise<SearchResponseType<any>> => {
    return this.handleSearchResponse(
      ApiClientService.post(this.getPath('/main-streets/search'), params, addConfig({})),
      10,
    );
  };

  searchAddress2 = (params: any): Promise<SearchResponseType<any>> => {
    return this.handleSearchResponse(ApiClientService.post(this.getPath('/streets/search'), params, addConfig({})), 10);
  };

  getAddress1 = (address: Pick<IAddress, 'state' | 'city'>): Promise<SearchResponseType<any>> => {
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

  getAddress2 = (address: Pick<IAddress, 'state' | 'city' | 'address1'>): Promise<SearchResponseType<any>> => {
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

  /* get one state */
  getOneState = (code: string): Promise<any> => {
    return this.handleResponse(ApiClientService.get(this.getPath(`/provinces/${code}`), addConfig({})));
  };

  /* get one state */
  getOneCity = (code: string): Promise<any> => {
    if (code) {
      return this.handleResponse(ApiClientService.get(this.getPath(`/municipalities/${code}`), addConfig({})));
    }
    return Promise.reject(new Error('You must need a code'));
  };

  /* get one main-street */
  getOneMainStreet = (address: Pick<IAddress, 'state' | 'city' | 'address1'>): Promise<any> => {
    if (address) {
      return this.handleResponse(
        ApiClientService.get(
          this.getPath(`/main-streets/${address?.state}/${address?.city}/${address?.address1} `),
          addConfig({}),
        ),
      );
    }
    return Promise.reject(new Error('You must need a state, city and code'));
  };

  /* get one main-street */
  getOneStreet = (address: Pick<IAddress, 'state' | 'city' | 'address1' | 'address2'>): Promise<any> => {
    if (address) {
      return this.handleResponse(
        ApiClientService.get(
          this.getPath(
            `/streets/${address?.state}/${address?.city}/${address?.address1}/${address?.address2 as string}`,
          ),
          addConfig({}),
        ),
      );
    }
    return Promise.reject(new Error('You must need a state, city and code'));
  };

  /* get one main-street */
  getCuLocation = (address: Pick<IAddress, 'state' | 'city' | 'address1' | 'address2'>): Promise<any> => {
    if (address) {
      return this.handleResponse(
        ApiClientService.get(
          this.getPath(
            `/locations/provinces/${address?.state}/municipalities/${address?.city}/main-street/${address?.address1}/streets/${
              address?.address2 || ''
            }`,
          ),
          addConfig({}),
        ),
      );
    }
    return Promise.reject(new Error('You must need a state, city and code'));
  };
}

export default new AddressService(MS_LOCATION_CONFIG.url);
