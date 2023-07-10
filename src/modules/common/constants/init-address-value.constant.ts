import { IAddress, IAddressWithLocation } from 'modules/common/interfaces';

export const addressInitValue: IAddress = {
  address: '',

  municipality: '',

  state: '',

  country: '',

  zipCode: '',
};

export const addressWithLocationInitValue: IAddressWithLocation = {
  ...addressInitValue,
  location: {
    coordinates: [-73.9667, 40.78]
  }
}
