import { ApiClientService, EntityApiService, SearchResponseType } from '@dfl/react-security';
import { IAddress } from '../interfaces';

class AddressService extends EntityApiService<IAddress> {
  searchCurrency = (params?: any, config?: any): Promise<SearchResponseType<string[]>> => {
    return this.handleResponse(ApiClientService.post(this.getPath('/currency'), params, config));
  };

  searchState = (
    address: Pick<IAddress, 'country'>,
    params?: any,
    config?: any,
  ): Promise<SearchResponseType<string[]>> => {
    if (address) {
      return this.handleResponse(ApiClientService.post(this.getPath('/state'), { ...params, address }, config));
    }
    return Promise.reject(new Error('You must need a currency code'));
  };

  searchCity = (
    address: Pick<IAddress, 'country' | 'state'>,
    params?: any,
    config?: any,
  ): Promise<SearchResponseType<string[]>> => {
    if (address) {
      return this.handleResponse(ApiClientService.post(this.getPath('/city'), { ...params, address }, config));
    }
    return Promise.reject(new Error('You must need a country and state code'));
  };

  searchAddress1 = (
    address: Pick<IAddress, 'country' | 'state' | 'city'>,
    params?: any,
    config?: any,
  ): Promise<SearchResponseType<string[]>> => {
    if (address?.city && address?.country && address?.state) {
      return this.handleResponse(ApiClientService.post(this.getPath('/city'), params, config));
    }
    return Promise.reject(new Error('You must need a country, state and city code'));
  };

  searchAddress2 = (
    address: Pick<IAddress, 'country' | 'state' | 'city' | 'address1'>,
    params?: any,
    config?: any,
  ): Promise<SearchResponseType<string[]>> => {
    if (address?.city && address?.country && address?.state) {
      return this.handleResponse(ApiClientService.post(this.getPath('/city'), params, config));
    }
    return Promise.reject(new Error('You must need a country, state, city and address1 code'));
  };
}

export default new AddressService('/ms-auth/api/address');
