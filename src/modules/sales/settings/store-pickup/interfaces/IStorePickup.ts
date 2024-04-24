import { IAddress } from 'modules/common/interfaces';

export interface IStorePickup {
  _id?: string;
  name: string;
  description: string;
  enabled: boolean;
}

export interface IStorePickupStatus {
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
  location: IAddress;
  enabled: boolean;
}
