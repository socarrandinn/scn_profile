export interface ICoordinate {
  lat: number;
  lng: number;
}

export interface IAddress {
  _id?: string;
  street: string;
  number: string;
  // State or Province
  state: string;
  // City, Municipality or Town
  city: string;
  country: string;
  zipCode?: string;
  notes?: string;
  location?: {
    type: string;
    coordinates: number[] | number[][];
  };
}
