import { IAddress } from 'modules/common/interfaces';

export const addressInitValue: IAddress = {
  address1: '',
  address2: '',
  houseNumber: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
};

export const addressWithLocationInitValue: IAddress = {
  ...addressInitValue,
  /* location: {
    type: 'Point',
    coordinates: [-73.9667, 40.78],
  }, */
};
