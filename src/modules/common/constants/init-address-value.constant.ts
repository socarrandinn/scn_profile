import { IAddress } from 'modules/common/interfaces';

export const addressInitValue: IAddress = {
  street: '',
  number: '',
  city: '',
  state: '',
  country: '',
  zipCode: '',
};

export const addressWithLocationInitValue: IAddress = {
  ...addressInitValue,
  location: {
    type: 'Point',
    coordinates: [-73.9667, 40.78],
  },
};
