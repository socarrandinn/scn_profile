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
  country: string | null;
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

  geoAddress?: IGeocode;
}

export interface IAddressCode {
  _id?: string;
  label: string;
  code: string;
}

export interface IGeocode {
  display_name: string;
  lat: string;
  lon: string;
  address: {
    city?: string;
    town?: string;
    village?: string;
    state?: string;
    country?: string;
    country_code?: string;
    postcode?: string;
    road?: string;
    quarter?: string;
    neighbourhood?: string;
    suburb?: string;
    city_district?: string;
    county?: string;
    amenity?: string;
    retail?: string;
    hamlet?: string;
    house_number?: string;
  };
}
