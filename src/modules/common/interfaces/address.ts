export interface IAddress {
  address: string;

  municipality: string;

  state: string;

  country: string;

  zipCode: string;
}

export interface IAddressWithLocation extends IAddress {
  location?: {
    coordinates: number[]
  }
}
