import { IImageMedia } from 'modules/common/interfaces';

export interface ITestimony {
  _id?: string;
  title: string;
  personName: string;
  image?: IImageMedia;
  comment: string;
  createdAt?: Date;
  active?: boolean;
}
