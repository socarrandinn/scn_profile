import { IAddress } from 'modules/common/interfaces';
import { ADDRESS_COUNTRY_CODE } from 'settings/address-location';

export const ADDRESS_INIT_VALUE: IAddress = {
  address1: '',
  address2: '',
  houseNumber: '',
  formattedAddress: '',
  city: '',
  state: '',
  country: ADDRESS_COUNTRY_CODE,
  zipCode: '',
};
