import { IImageMedia } from 'modules/common/interfaces';

export interface IManufacture {
  _id?: string;
  name: string;
  avatar: IImageMedia;
  state: boolean;
  brand: string[];
  keywords: string[];
  createdAt?: Date;
  active?: boolean;
}
