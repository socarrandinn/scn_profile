export interface ImageSchema { };
export interface ContactInfo { };
export interface AddressWithGeolocation { };

export interface IProductProvider {
  _id: string
  name?: string;
  code?: string;
  active?: boolean;
  avatar?: ImageSchema;
  contacts?: ContactInfo[];
  address?: AddressWithGeolocation;
  commission?: number;
  type?: string;
};
