import { IImageMedia } from 'modules/common/interfaces';

export interface ICategory {
  _id?: string;
  name: string;
  description: string;
  icon?: string;
  color: string;
  createdAt?: Date;
  visible?: boolean;
  image?: IImageMedia;
  parent?: string | null;
  order?: number;
}
