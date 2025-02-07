import { IAddress } from 'modules/common/interfaces';
import { MS_LOCATION_CONFIG } from 'settings/address-location';

export const ADDRESS_INIT_VALUE: IAddress = {
  address1: '',
  address2: '',
  houseNumber: '',
  city: '',
  state: '',
  country: MS_LOCATION_CONFIG.isCuban ? 'Cuba' : null,
  zipCode: '',
};
