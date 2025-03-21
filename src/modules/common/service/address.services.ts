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

  searchAddress1 = (params: {
    province: string;
    municipality: string;
    size: number;
    search?: string;
  }): Promise<SearchResponseType<any>> => {
    return this.handleSearchResponse(
      ApiClientService.get(
        this.getPath(
          `/provinces/${params?.province}/municipalities/${params?.municipality}/streets?q=${params?.search || ''}`,
        ),
        addConfig({}),
      ),
      params?.size || 10,
    );
  };

  searchAddress2 = (params: {
    province: string;
    municipality: string;
    mainStreet: string;
    size: number;
    search?: string;
  }): Promise<SearchResponseType<any>> => {
    return this.handleSearchResponse(
      ApiClientService.get(
        this.getPath(
          `/provinces/${params?.province}/municipalities/${params?.municipality}/streets/${
            params?.mainStreet
          }/between-streets?q=${params?.search || ''}`,
        ),
        addConfig({}),
      ),
      params?.size || 10,
    );
  };

  /* get one state */
  getOneState = (code: string): Promise<any> => {
    return this.handleResponse(ApiClientService.get(this.getPath(`/provinces/${code}`), addConfig({})));
  };

  /* get one state */
  getOneCity = (state: string, code: string): Promise<any> => {
    if (state && code) {
      return this.handleResponse(
        ApiClientService.get(this.getPath(`/provinces/${state}/municipalities/${code}`), addConfig({})),
      );
    }
    return Promise.reject(new Error('You must need a code'));
  };

  /* get one main-street */
  getOneMainStreet = (address: Pick<IAddress, 'state' | 'city' | 'address1'>): Promise<any> => {
    if (address) {
      return this.handleResponse(
        ApiClientService.get(
          this.getPath(`/provinces/${address?.state}/municipalities/${address?.city}/streets/${address?.address1}`),
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
            `/provinces/${address?.state}/municipalities/${address?.city}/streets/${address?.address1}/between-streets/${address?.address2 || ''}`,
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
            `/addresses/point/${address?.state + address?.city + address?.address1 + (address?.address2 || '')}`,
          ),
          addConfig({}),
        ),
      );
    }
    return Promise.reject(new Error('You must need a state, city and code'));
  };

  getCuPoi = (lng: number, lat: number): Promise<any> => {
    if (lng && lat) {
      return this.handleResponse(
        ApiClientService.get(this.getPath(`/addresses/point/reverse/${lng}/${lat}`), addConfig({})),
      );
    }
    return Promise.reject(new Error('You must need a longitude and latitude'));
  };
}

export default new AddressService(MS_LOCATION_CONFIG.url);
