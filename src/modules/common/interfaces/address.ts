export interface ICoordinate {
  lat: number;
  lng: number;
}

export interface IAddress {
  _id?: string;
  houseNumber: string;
  // State or Province
  state: string;
  // City, Municipality or Town
  city: string;
  country: string;
  zipCode?: string;
  formattedAddress?: string;
  address1: string;
  address2?: string;
  // street: string;
  // notes?: string;
  location?: {
    type: string;
    coordinates: number[] | number[][];
  };
}

export interface IAddressCode {
  _id?: string;
  label: string;
  code: string;
}
