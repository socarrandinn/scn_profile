export interface IOrderShippingDestinationSettings {
  deletedAt: any;
  uniqPrice: boolean;
  volumePrice: number;
  weightPrice: number;
  _id: string;
  places: IDestinationPlace[];
  stores: string[];
  id: string;
}

export interface IDestinationPlace {
  location: IDestinationLocation;
  active: boolean;
  time: number;
  _id: string;
  price: number;
  volumePrice: number;
  weightPrice: number;
}

export interface IDestinationLocation {
  type: string;
  country: string;
  state: string;
  code: string;
  municipality?: string;
}

export interface IDestination {
  _id: string;
  province: IDestinationPlace;
  exceptions?: IDestinationPlace[];
}
