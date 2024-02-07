export interface IStorePickup {
  _id?: string;
  name: string;
  description: string;
  enabled: boolean;
}

export interface IStorePickupSatus {
  enabled: boolean;
}

export interface IPlace {
  _id?: string;
  name: string;
  time: number;
  priceTime: {
    price: number;
    value: number;
  };
  location: {
    address: string;
    municipality: string;
    state: string;
    country: string;
    zipCode?: string;
    location?: {
      coordinates: number[];
    };
  };
  enabled: boolean;
}
